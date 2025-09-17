# Payments Microservice

This is a NestJS-based microservice for handling payment processing, integrated with Stripe.

## Description

The Payments Microservice provides an API to create payment sessions and handle payment success/cancellation callbacks and Stripe webhooks.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd payments-ms
    ```
3.  Install dependencies:
    ```bash
    pnpm install
    ```

### Environment Variables

Create a `.env` file in the root of the project by copying the template:

```bash
cp .template.env .env
```

Then, fill in the required environment variables:

- `PORT`: The port the application will run on (e.g., 3003).
- `STRIPE_SECRET`: Your Stripe secret key.
- `BACKEND_BASE_URL`: The base URL of this microservice, used for constructing redirect URLs for Stripe.

## Running the Application

### Development

To run the application in development mode with hot-reloading:

```bash
pnpm run start:dev
```

The application will be available at `http://localhost:{PORT}`.

### Production

To build and run the application in production mode:

```bash
pnpm run build
pnpm run start:prod
```

## Available Scripts

- `start`: Starts the application.
- `start:dev`: Starts the application in watch mode.
- `build`: Builds the application for production.
- `format`: Formats the code using Prettier.
- `lint`: Lints the code using ESLint.
- `test`: Runs unit tests.

## API Endpoints

- `POST /payments/create-payment-session`: Creates a new Stripe payment session.
- `GET /payments/success`: The endpoint for successful payment redirection.
- `GET /payments/cancel`: The endpoint for cancelled payment redirection.
- `POST /payments/webhook`: Endpoint for receiving Stripe webhook events.
