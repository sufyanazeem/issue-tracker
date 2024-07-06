"use client";
import { TextField ,TextArea,Button} from '@radix-ui/themes';
import React from 'react';
import Link from "next/link";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Enter issue title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit NEw Issue</Button>
    </div>
  );
};

export default NewIssuePage;
