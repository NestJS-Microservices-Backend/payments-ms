import { Body, Controller, Get, Post } from '@nestjs/common';

import { PaymentSessionDto } from './dto';
import { PaymentsService } from './payments.service';

@Controller( 'payments' )
export class PaymentsController {

  constructor(
    private readonly paymentsService: PaymentsService
  ) { }

  @Post( 'create-payment-session' )
  createPaymentSession( @Body() paymentSessionDto: PaymentSessionDto ) {
    return this.paymentsService.createPaymentSession( paymentSessionDto );
  }

  @Get( 'success' )
  success() {
    return {
      ok: true,
      message: 'Payment successful'
    };
  }

  @Get( 'cancel' )
  cancell() {
    return {
      ok: false,
      message: 'Payment cancelled'
    };
  }

  @Post( 'webhook' )
  async stripeWebhook() {
    return 'stripeWebhook';
  }

}
