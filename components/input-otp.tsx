"use client"

import { useEffect, useState } from "react"
import { OTPInput } from "input-otp"
import { Slot } from "./slot"
import FakeDash from "./fake-dash"

export default function Otp() {
   const [otp, setOtp] = useState<string | null>(null)
   const [isValidating, setIsValidating] = useState<boolean>(false)

   // useEffect(() => {
   //    if (otp?.length === 4) {
   //       setIsValidating(true)
   //       setTimeout(() => {
   //          setIsValidating(false)
   //       }, 2000)
   //    }
   // }, [otp])

   const onSubmit = () => {
      setIsValidating(true)
      console.log(otp)
   }

   return (
      <form className="absolute inset-0 flex flex-col text-black justify-center items-center h-screen w-full">
         <OTPInput
            onChange={setOtp}
            onComplete={onSubmit}
            value={otp ?? ""}
            maxLength={4}
            containerClassName="group flex items-center has-[:disabled]:opacity-30"
            render={({ slots }) => (
               <>
                  <div className="flex">
                     {slots.slice(0, 2).map((slot, idx) => (
                        <Slot key={idx} {...slot} />
                     ))}
                  </div>

                  <FakeDash />

                  <div className="flex">
                     {slots.slice(2).map((slot, idx) => (
                        <Slot key={idx} {...slot} />
                     ))}
                  </div>
               </>
            )}
         />

         {isValidating && (
            <div className="mt-4 text-sm text-gray-600">Validating...</div>
         )}
      </form>
   )
}

// * docs: https://input-otp.rodz.dev/
