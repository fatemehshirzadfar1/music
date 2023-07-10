/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Image from "next/image";
import Head from "next/head";

export async function getServerSideProps(ctx: any) {
  const token = ctx.req.cookies.user;
  if (token) {
    return {
      redirect: {
        destination: `/home`,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  const { status, user } = useSelector((state: any) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [router, user, status]);

  return (
    <div className="font-ProximaRegular bg-[#0d0d0d] text-white">
      <Head>
        <title>Lyra</title>
      </Head>
      <div className="fixed top-5 left-0 right-0 z-40 bg-[#0d0d0d]">
        <div className="flex flex-row max-w-[1280px] justify-between items-center mx-auto p-2">
          <div className="flex flex-row items-center">
            <h1
              className="text-center uppercase mx-2 
              tracking-wider font-ProximaBold"
            >
              Lyra
            </h1>
          </div>
          <div className="flex uppercase text-sm">
            <Link href={"/login"}>
              <div className="cursor-pointer mx-2 hover:underline text-slate-100 hover:text-white">
                <p>Login</p>
              </div>
            </Link>
            <Link href={"/register"}>
              <div className="cursor-pointer mx-2 hover:underline text-slate-100 hover:text-white">
                <p>Sign up</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden pt-36 pb-20 mobile:pb-16  w-full 
        flex justify-center items-center "
        >
          <div
            className="cliped w-[500px] h-[450px] bg-[#2bb540]
          bg-gradient-to-r from-[#2bb] via-[#0DAD8D] to-yellow-200
           bg-opacity-80"
          ></div>
        </div>
        <div
          className="bg-[#0d0d0d] bg-opacity-30 pt-36 pb-20 mobile:pb-16 
          backdrop-blur-[70px] 
        absolute z-10 inset-0 max-w-[1280px] mx-auto 
         flex justify-center flex-col items-center"
        >
          <h1
            className="text-[70px] font-ProximaBold text-center
           leading-[5rem] mini-laptop:text-[60px] tablet:text-[50px] mini-laptop:leading-[4rem]
            tablet:leading-[4rem] mobile:text-[35px] mobile:leading-[2.5rem]"
          >
            Lyra Music
            <br /> 
          </h1>
          <p className="text-center mt-4 max-w-[600px] mx-auto text-[18px] px-8">
            Explore & download music and use it anywhere you like
          </p>
          <Link href={"/register"}>
            <div className="cursor-pointer shadow-md px-5 py-2 rounded-3xl mt-6 bg-[#0d0d0d] w-fit">
              Get started
            </div>
          </Link>
        </div>
      </div>
      
        <div
          className="mt-15  py-10 border-t 
         items-center flex flex-col border-t-slate-800"
        >
          <p className="text-center">
            2022, Made by{" "}
            <Link href="http://lyra2music.com/">
              <span className="underline text-[#0DAD8D] cursor-pointer">
                Lyra
              </span>
            </Link>
          </p>
        </div>
      </div>
    
  );
};

export default Home;
