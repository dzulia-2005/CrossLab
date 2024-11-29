import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select } from 'antd';
import { cn } from "@/lib/utils";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const { Option } = Select;

const options = [
  { value: 'react', label: "react" },
  { value: 'ui/ux', label: "ui/ux" }
];

const children: React.ReactNode[] = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  );
}

type FormValues = {
  questiontitle: string;
  questiondescrib: string;
  tags: string[];
};

const Createquestion: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<FormValues>();

  
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[45%]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-2 mb-5">
            <Label className="text-sm" htmlFor="questiontitle">Question Title</Label>
            <Input
              type="text"
              id="questiontitle"
              placeholder="Title"
              {...register('questiontitle', { required: 'This field is required' })}
            />
            {errors.questiontitle && <p className='text-red-600'>{errors.questiontitle.message}</p>}
          </div>
          <div className="grid w-full items-center gap-2 mb-5">
            <Label className="text-sm" htmlFor="questiondescrib">Question Description</Label>
            <Textarea
              id="questiondescrib"
              className="resize-none"
              {...register('questiondescrib', { required: 'This field is required' })}
            />
            {errors.questiondescrib && <p className='text-red-600'>{errors.questiondescrib.message}</p>}
          </div>
          <div>
            <Label className="text-sm" htmlFor="tags">Tags</Label>
            <Controller
              name="tags"
              control={control}
              rules={{ required: 'Please select at least one tag' }}
              render={({ field }) => (
                <Select
                  {...field}
                  mode="tags"
                  className="w-[100%] my-5"
                  placeholder="Tags"
                  options={options}
                >
                  {children}
                </Select>
              )}
            />
            {errors.tags && <p className='text-red-600'>{errors.tags.message}</p>}
          </div>
          <Button
            type="submit"
            className={cn(buttonVariants({ variant: "auth", size: "lg" }))}
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Createquestion;
