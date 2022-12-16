import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Cart } from '../models/cart.model';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async createNewCart(customerId: string): Promise<Cart> {
    return await this.prisma.cart.create({
      data: { customerId, totalPrice: 0, finalPrice: 0 },
    });
  }

  async getCart(cartId: string): Promise<Cart> {
    return await this.prisma.cart.findUnique({
      where: { id: cartId },
    });
  }

  async getCartByCustomer(customerId: string): Promise<Cart> {
    const existingCart = await this.prisma.cart.findUnique({
      where: { customerId },
    });
    if (!existingCart) {
      return await this.createNewCart(customerId);
    } else return existingCart;
  }

  async updateCartPrice(
    cartId: string,
    prices: { totalPrice: number }
  ): Promise<Cart> {
    return await this.prisma.cart.update({
      where: { id: cartId },
      data: {
        ...prices,
      },
    });
  }

  async checkoutCart(cartId: string) {
    const cart = await this.getCart(cartId);
    // const cartItems = await this.cartItemService.getCartItems(cartId);

    return;
  }
}
