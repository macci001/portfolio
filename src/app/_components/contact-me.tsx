"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2).max(10),
  email: z.string().email(),
  message: z.string().min(2).max(100)
})
type TFormSchema = z.infer<typeof formSchema>;

export const ContactMe = () => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const submitHandler = async (data: TFormSchema) => {
    try {
      const response = await axios.post("/api/send-message", {
        name: data.name,
        email: data.email,
        message: data.message
      })
      
    } catch (e) {
      
    } finally {

    }
  }


  return (<div id="contact-me" className="flex flex-col my-[5vh] mt-[10vh] items-center gap-y-6">
    <div className="relative text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight">
      Get in Touch
      <div className="absolute bg-yellow-400 w-full h-4 -bottom-2 opacity-40"></div>
    </div>
    <div className="bg-yellow-50 p-4 rounded-md w-[60vw]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="your good name..." {...field} className="bg-yellow-50" />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="how can we get back to you..." {...field} className="bg-yellow-50"/>
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="message..." {...field} className="bg-yellow-50" />
                </FormControl>
                <FormDescription className="px-4 flex justify-right">
                  {form.watch("message").length > 100 ? <div className="text-red-600 font-semibold text-sm">
                    {form.watch("message").length} / 100
                  </div> : form.watch("message").length === 0 ? <div>

                  </div> : <div>
                    {form.watch("message").length} / 100
                  </div>
                  }
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  </div>)
}