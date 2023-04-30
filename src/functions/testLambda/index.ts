import { APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent) => {
  console.info('incoming event is', JSON.stringify(event));

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World!' })
  };

  return response;
};
