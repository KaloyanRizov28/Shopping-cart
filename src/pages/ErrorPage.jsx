import { Card, CardBody, Button } from '@nextui-org/react';

export default function ErrorPage() {
  return (
    <Card>
      <CardBody className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Button 
          href="/" 
          as="a" 
          color="primary"
        >
          Return Home
        </Button>
      </CardBody>
    </Card>
  );
}