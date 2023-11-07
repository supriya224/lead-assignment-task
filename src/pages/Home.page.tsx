import { ChangeEvent, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Toaster } from 'react-hot-toast';
import { Button, Input, PostalPlace } from "../components";
import { MainLayout } from "../layouts";
// import { useAppSelector } from "../redux/store";
import useAxios from "../hooks/useAxios";
import { IPostCodeResponse } from "../interface/postalCode.interface";

/* eslint-disable prettier/prettier */
function HomePage() {
    const [inputValue, setInputValue] = useState<string | undefined>('');
    // const counter = useAppSelector((state) => state.postalCode);
    const { response, loading, sendData } = useAxios({
        method: "get",
        url: `/${String(inputValue)}`,
        headers: {
            accept: '*/*'
        }
    }, false)
    const modifiedResponse = response?.data as IPostCodeResponse;


    const onSearch = () => {
        sendData();
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return <MainLayout>
        <Input type="text" label="postalCode" placeholder="Enter the postal code ..."
            value={inputValue}
            onChange={handleInputChange}
        />
        <Button type="button" className="flex" onClick={onSearch} isLoading={loading} >{loading ? 'Loading..' : 'search'}</Button>

        <div className="ml-[20rem] items-center justify-center w-[50rem] h-12 sm:h-20 lg:text-center flex text-white gap-12 text-xl font-bold bg-blue-300 rounded-lg shadow-md shadow-blue-500">
            <h1 className="pr-9 border-r-2 border-white">country -  {modifiedResponse?.country}</h1>
            <h1 className="pr-9 border-r-2 border-white">code -  {modifiedResponse?.['post code']}</h1>
            <h1 className="pr-9 border-r-2 border-white">country abbreviation - {modifiedResponse?.['country abbreviation']}</h1>
        </div>





        <div className="flex gap-4 flex-wrap mt-9 justify-evenly">
            {
                modifiedResponse?.places && modifiedResponse?.places?.length > 0 && modifiedResponse?.places?.map((place) => {
                    return <PostalPlace place={place} />
                })
            }

        </div>

        <Toaster />
    </MainLayout>
}

export default HomePage;
