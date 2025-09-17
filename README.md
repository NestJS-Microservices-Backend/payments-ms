# Payments Microservice

This is a [NestJS](https://nestjs.com/) based microservice for handling payments with [Stripe](https://stripe.com/).

## Description

The Payments Microservice exposes an API to create payment sessions and handles the entire lifecycle of a payment process through Stripe.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) installed globally (`npm install -g pnpm`)
- A [Stripe](https://stripe.com/) account and API keys.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd payments-ms
    ```

3.  **Install dependencies:**
    ```bash
    pnpm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file by copying the template:
    ```bash
    cp .template.env .env
    ```
    Then, fill in the required variables in the `.env` file:
    - `STRIPE_SECRET`: Your Stripe secret key.
    - `BACKEND_BASE_URL`: The base URL where the service is running (e.g., `http://localhost:3000`).
    - `STRIPE_ENDPOINT_SECRET`: Your Stripe webhook endpoint secret.

---

## Running the Application

```bash
# Development mode
pnpm run start

# Watch mode
pnpm run start:dev

# Production mode
pnpm run start:prod
```

---

## Running Tests

```bash
# Unit tests
pnpm run test

# End-to-end (e2e) tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov
```

---

## API Endpoints

### `POST /payments/create-payment-session`

Creates a new Stripe Checkout Session.

-   **Body:**
    ```json
    {
      "currency": "usd",
      "items": [
        {
          "name": "Product Name",
          "price": 100,
          "quantity": 1
        }
      ]
    }
    ```

### `GET /payments/success`

The URL to which Stripe redirects the user after a successful payment.

### `GET /payments/cancel`

The URL to which Stripe redirects the user after a canceled payment.

### `POST /payments/webhook`

Endpoint to receive and process webhooks from Stripe.

---

## License

This project is private and unlicensed.