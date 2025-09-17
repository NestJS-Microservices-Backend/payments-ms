import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT:             number;
  STRIPE_SECRET:    string;
  BACKEND_BASE_URL: string;
}

const envsSchema = joi.object( {
  PORT:          joi.number().required(),
  STRIPE_SECRET: joi.string().required(),
  BACKEND_BASE_URL: joi.string().required(),
} )
  .unknown( true );

const { error, value } = envsSchema.validate( process.env );

if ( error ) {
  throw new Error( `Config validation error: ${ error.message }` );
}

const envVars: EnvVars = value;


export const envs = {
  port:           envVars.PORT,
  stripeSecret:   envVars.STRIPE_SECRET,
  backendBaseUrl: envVars.BACKEND_BASE_URL,
};