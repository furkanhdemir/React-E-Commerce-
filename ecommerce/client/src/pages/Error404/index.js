import React from "react";
import {
  AlertIcon,
  AlertTitle,
  Alert,
  AlertDescription,
} from "@chakra-ui/react";

function Error404() {
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>There is nothing here </AlertTitle>
        <AlertDescription>
          The page you were looking for was not found.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default Error404;
