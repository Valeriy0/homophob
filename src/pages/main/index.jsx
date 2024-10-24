import React from "react";

export const Main = () => {

    const socials = [
        {
          img: '/x.svg',
          title: 'Twitter',
          url: 'https://x.com/dev_is_gay'
        },
        {
          title: 'Telegram',
          img: '/tg.svg',
          url: 'https://t.me/+eZzW36Ss1uBmZWZh'
        },
        {
          title: 'Dex',
          img: '/dex.svg',
          url: ''
        }
      ]
    
    return (
        <div className="relative main h-screen w-screen overflow-hidden">
            <div className="py-[18px] px-[32px] flex items-center justify-between sm:flex-col sm:justify-center sm:space-y-[20px] fixed top-0 left-1/2 -translate-x-1/2 max-w-[1200px] sm:max-w-full w-full">
                <img className="max-h-[40px] h-full" src="/logo.svg" alt="" />
                <a href="/" target="_blank" className="bg-[#7DF19C] border border-solid border-white rounded-[12px] shadow-md h-[64px] sm:h-[48px] w-[202px] flex items-center justify-center">
                    <img src="/buyToken.svg" alt="" />
                </a>
            </div>
            <div className="flex items-center justify-center space-x-[48px] fixed bottom-[40px] sm:bottom-[24px] left-1/2 -translate-x-1/2">
                {socials.map((item, itemIndex) => {
                    if (item.url) {
                        return (
                            <a href={item.url} target="_blank" className="flex items-center justify-center" key={itemIndex}>
                                <img className="h-[48px] w-[48px] " src={item.img} alt="" />
                                <span className="text-white text-[24px] font-light ml-[12px] sm:hidden">{item.title}</span>
                            </a>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}