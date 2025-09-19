import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

import { envs } from 'src/config';
import { PaymentSessionDto } from './dto';


@Injectable()
export class PaymentsService {

  private readonly stripe = new Stripe( envs.stripeSecret );


  async createPaymentSession( paymentSessionDto: PaymentSessionDto ) {

    const { currency, items } = paymentSessionDto;

    const lineItems = items.map( item => {
      return {
        price_data: {
          currency: currency,
          product_data: {
            name: item.name
          },
          unit_amount: Math.round( item.price * 100 ),
        },
        quantity: item.quantity
      };
    } );

    const session = await this.stripe.checkout.sessions.create( {
      payment_intent_data: {
        metadata: {}
      },
      line_items: lineItems,
      mode: 'payment',
      success_url: `${ envs.backendBaseUrl }/payments/success`,
      cancel_url: `${ envs.backendBaseUrl }/payments/cancel`
    } );

    return session;
  }

}
