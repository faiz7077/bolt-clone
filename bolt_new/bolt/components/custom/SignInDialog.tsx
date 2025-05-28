// import React, { useState } from 'react'
// import axios from 'axios';
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//   } from "@/components/ui/dialog"
// import Lookup from '@/data/Lookup';
// import { Button } from '../ui/button';
// import { useGoogleLogin } from '@react-oauth/google';
// import { UserDetailContext } from '@/context/UserDetailContext';
  
// type Props = {
//   openDialog: boolean;
//   onClose?: () => void;
// }

// function SignInDialog({openDialog, onClose}: Props) {
// // Fixed: Changed 'userdetail' to 'userDetail' to match the context
// const {userDetail, setUserDetail} = React.useContext(UserDetailContext);

// const googleLogin = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       console.log(tokenResponse);
//       const userInfo = await axios.get(
//         'https://www.googleapis.com/oauth2/v3/userinfo',
//         { headers: { Authorization: 'Bearer '+ tokenResponse?.access_token } },
//       );
  
//       console.log(userInfo);
//       setUserDetail(userInfo.data);
//       // Fixed: Call onClose without parameters
//       if (onClose) {
//         onClose();
//       }
//     },
//     onError: errorResponse => console.log(errorResponse),
//   });
  
//   return (
//     <div>
//         <Dialog open={openDialog} onOpenChange={(open) => {
//           if (!open && onClose) {
//             onClose();
//           }
//         }}>
//             <DialogContent>
//                 <DialogHeader>
//                 <DialogTitle className="font-bold text-center text-2xl">{Lookup.SIGNIN_HEADING}</DialogTitle>
//                 <DialogDescription className="mt-2 text-center ">
//                     {Lookup.SIGNIN_SUBHEADING}
//                 </DialogDescription>
//                 </DialogHeader>
//                 <div className='flex flex-col justify-center items-center gap-3 mt-4'>
//                     <Button className=' bg-blue-500 text-white cursor-pointer hover:bg-blue-400' onClick={() => googleLogin()}>
//                         SignIn with Google
//                     </Button>
//                     <span className='text-sm text-center text-gray-500 mt-3'>
//                         {Lookup.SIGNIn_AGREEMENT_TEXT}
//                     </span>
//                 </div>
//             </DialogContent>
//         </Dialog>
//     </div>
//   )
// }

// export default SignInDialog

import React, { useContext, useState } from 'react'
import axios from 'axios';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import Lookup from '@/data/Lookup';
import { Button } from '../ui/button';
import { useGoogleLogin } from '@react-oauth/google';
import { UserDetailContext } from '@/context/UserDetailContext';
  
type Props = {
  openDialog: boolean;
  onClose?: () => void;
}


// const [userDetail, setUserDetail] = context;
function SignInDialog({openDialog, onClose}: Props) {
    const context = useContext(UserDetailContext);

    if (!context) {
    throw new Error("UserDetailContext not found. Make sure you're inside a UserDetailProvider.");
    }
    const {userDetail, setUserDetail} = context;
    // const {userDetail, setUserDetail} = React.useContext(UserDetailContext);

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
        console.log(tokenResponse);
        const userInfo = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            { headers: { Authorization: 'Bearer '+ tokenResponse?.access_token } },
        );
    
        console.log(userInfo);

        const user= userInfo.data ;
        setUserDetail(userInfo.data);
        // Fixed: Call onClose without parameters
        if (onClose) {
            onClose();
        }
        },
        onError: errorResponse => console.log(errorResponse),
    });
  
  return (
    <div>
        <Dialog open={openDialog} onOpenChange={(open) => {
          if (!open && onClose) {
            onClose();
          }
        }}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="font-bold text-center text-2xl">{Lookup.SIGNIN_HEADING}</DialogTitle>
                <DialogDescription className="mt-2 text-center ">
                    {Lookup.SIGNIN_SUBHEADING}
                </DialogDescription>
                </DialogHeader>
                <div className='flex flex-col justify-center items-center gap-3 mt-4'>
                    <Button className=' bg-blue-500 text-white cursor-pointer hover:bg-blue-400' onClick={() => googleLogin()}>
                        SignIn with Google
                    </Button>
                    <span className='text-sm text-center text-gray-500 mt-3'>
                        {Lookup.SIGNIn_AGREEMENT_TEXT}
                    </span>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default SignInDialog