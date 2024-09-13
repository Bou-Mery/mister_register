import React from 'react';
import { useForm } from 'react-hook-form';
import {zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { axiosClient } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
})

function StagaireLogin() {

    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: 'meryemboukhrais@gmail.com',
            password: '123456789',
        }
      });

      // Corriger ici
      const { setError } = form;

      async function onSubmit(values) {
        await axiosClient.get("/sanctum/csrf-cookie");

        axiosClient.post('/login' , values)
        .then((value) => {
            if (value.status === 204) {
                navigate('/stagaire/dashboard');
            }
        }).catch(({ response }) => {
            setError('email', {
                message: response.data.errors.email.join(),
            });
        });
      }

  return (
    <div className='bg-dark'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type={'password'} placeholder="Password.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default StagaireLogin;
