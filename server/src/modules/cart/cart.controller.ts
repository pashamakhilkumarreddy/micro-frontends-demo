import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Body,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import products, { Product } from 'src/products';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

@Controller('cart')
export class CartController {
  constructor() {}

  private carts: Record<number, Cart> = {
    1: this.initialCart([0, 2, 4]),
    2: this.initialCart([3, 6, 9]),
  };

  initialCart(idxs: number[]): Cart {
    return {
      cartItems: idxs.map((idx) => ({
        ...products[idx],
        quantity: 1,
      })),
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const cart = this.carts[req.user.userId];
    const cartItem = cart.cartItems.find(
      (cartItem) => cartItem.id === Number(id),
    );
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        ...products.find((product) => product.id === Number(id)),
        quantity: 1,
      });
    }
    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async delete(@Request() req): Promise<Cart> {
    this.carts[req.user.userId] = {
      cartItems: [],
    };
    return this.carts[req.user.userId];
  }
}
