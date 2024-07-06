"use client";
import { TextField ,Button} from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Enter issue title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit NEw Issue</Button>
    </div>
  );
};

export default NewIssuePage;
