"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>(
    {}
  )

  const validate = () => {
    const next: typeof errors = {}
    if (!email) next.email = "Email is required"
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Enter a valid email"
    if (!password) next.password = "Password is required"
    else if (password.length < 6) next.password = "Password must be at least 6 characters"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setErrors({})

    try {
      // Replace with real auth request. Here we simulate an async call.
      await new Promise((res) => setTimeout(res, 700))
      // On success you might redirect or update auth state
      console.log("logged in", { email })
    } catch (err) {
      setErrors({ form: "Something went wrong. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 max-w-md mx-auto", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Entrar na sua conta</CardTitle>
          <CardDescription>Use seu email e senha para entrar</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} noValidate>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <FieldContent>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email && (
                    <FieldError id="email-error">{errors.email}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
                <FieldContent>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    required
                  />
                  {errors.password && (
                    <FieldError id="password-error">{errors.password}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field>
                <div className="flex flex-col gap-3">
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    ) : null}
                    Entrar
                  </Button>

                  <Button variant="outline" type="button" className="w-full">
                    {/* Simple Google icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="h-4 w-4 mr-2"
                      aria-hidden
                    >
                      <path fill="#fbc02d" d="M43.6 20.5H42V20H24v8h11.3C34.6 31 30 34 24 34c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C33.8 4.9 29.1 3 24 3 12.95 3 4 11.95 4 23s8.95 20 20 20c10 0 18.5-7.3 19.6-17.1.4-2.9.4-5.6 0-6.4z" />
                    </svg>
                    Entrar com Google
                  </Button>

                  {errors.form && (
                    <FieldDescription className="text-center text-destructive">
                      {errors.form}
                    </FieldDescription>
                  )}

                  <FieldDescription className="text-center">
                    Ainda não tem conta? <a href="/auth/register">Cadastre-se</a>
                  </FieldDescription>
                </div>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
