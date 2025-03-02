import { NextResponse } from "next/server";
import { Resend } from "resend";
// import { AlgoalleyEmail } from "../../../components/email/Algoalley-email";
import { ClientEmail } from "../../../components/email/client-email";

// const resend = new Resend(process.env.RESEND_API);

export async function POST(req: any, res: any) {
//   try {
//     const { name, email, service, message } = await req.json();
//     // const { data, error } = await resend.emails.send({
//     //   from: `${process.env.COMPANY_EMAIL}`,
//     //   to: `${process.env.MEMBER_EMAIL}`,
//     //   subject: "Algoalley Studios",
//     //   // react: AlgoalleyEmail({
//     //   //   name,
//     //   //   email,
//     //   //   service,
//     //   //   message,
//     //   // }) as React.ReactElement,
//     // });
// const data="abc";
//     if (data) {
//       try {
//         const { data, error } = await resend.emails.send({
//           from: `${process.env.COMPANY_EMAIL}`,
//           to: `${email}`,
//           subject: "Algoalley Studios",
//           react: ClientEmail({ name }) as React.ReactElement,
//         });

//         if (data) {
//           return NextResponse.json("Both Email sent successfully");
//         } else {
//           console.error("Client Error sending email:", error);
//           return NextResponse.json(
//             { error: " Client Error sending email" },
//             { status: 400 }
//           );
//         }
//       } catch (error) {
//         console.error(" Client Error handling form submission:", error);
//         return NextResponse.json(
//           { error: "Error handling form submission" },
//           { status: 500 }
//         );
//       }
//     } else {
//       // console.error("Algoalley Error sending email:", error);
//       return NextResponse.json(
//         { error: "Error sending email" },
//         { status: 400 }
//       );
//     }
//   } catch (error) {
//     console.error("Algoalley Error handling form submission:", error);
//     return NextResponse.json(
//       { error: "Error handling form submission" },
//       { status: 500 }
//     );
//   }
}
