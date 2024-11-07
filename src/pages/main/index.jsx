import React from "react";
import copyToClipBoard from 'copy-to-clipboard';
import Marquee from 'react-fast-marquee';

export const Main = () => {
    const buyLink = 'https://pump.fun/A3x1P4asSmFP9tZE6AENiFrzSV3yqTe9b5drsHSpump';

    const socials = [
        {
          img: '/x.svg',
          title: 'Twitter',
          url: 'https://x.com/TokenMsgaDonald'
        },
        {
          title: 'Telegram',
          img: '/tg.svg',
          url: 'https://t.me/+KznqUSjj9Hg4YzZh'
        },
        {
          title: 'Dex',
          img: '/dex.svg',
          url: ''
        }
      ]

      const tokenInfo = [
        {
            title: 'Contract Address',
            value: 'A3x1P4asSmFP9tZE6AENiFrzSV3yqTe9b5drsHSpump',
            isCopied: true,
        },
        {
            title: 'Total Supply',
            value: '1 billion'
        },
        {
            title: 'TAX',
            value: '0%'
        },
        {
            title: 'Liquidity Pool',
            value: 'BURN'
        },
      ]

      const renderSocial = (bottom = '') => {
        
        return (
            <div className={`flex items-center justify-center space-x-[48px] absolute ${bottom || ''} left-1/2 -translate-x-1/2`}>
                    {socials.map((item, itemIndex) => {
                        if (item.url.length) {
                            return (
                                <a href={item.url} target="_blank" className="flex items-center justify-center" key={itemIndex} rel="noreferrer">
                                    <img className="h-[48px] w-[48px] " src={item.img} alt="" />
                                    <span className="text-white text-[24px] font-light ml-[12px] sm:hidden">{item.title}</span>
                                </a>
                            )
                        }
                        return null;
                    })}
                </div>
        )
      }

      const buyLinkRender = (className) => {
        return (
            <a href={buyLink} target="_blank" className={`h-[64px] w-[202px] sm:w-full sm:h-auto flex items-center justify-center ${className}`} rel="noreferrer">
                <img src="/img/buyToken.webp" alt="" />
            </a>
        )
      }
    
    return (
        <div className="flex flex-col items-center justify-start">
            <div className="relative main min-h-screen w-screen flex items-center justify-center sm:min-h-[80vh]">
                <div className="z-[10] py-[18px] px-[32px] flex items-center justify-end sm:flex-col sm:justify-center sm:space-y-[20px] absolute top-0 left-1/2 -translate-x-1/2 max-w-[1200px] sm:max-w-full w-full">
                    {buyLinkRender()}
                </div>
                <img className="max-h-[620px] h-[57vh] sm:max-h-[280px]" src="/img/token.webp" alt="" />
                {renderSocial('bottom-[40px]')}
            </div>

            <Marquee className="!flex h-[100px] bg-[#000] border border-solid border-l-transparent border-r-transparent border-white" gradient gradientColor="#000" gradientWidth={50} autoFill>
                <div className="flex space-x-[24px] items-center uppercase text-[32px] text-white mx-[12px] sm:text-[19.5px]">
                    <div className="flex space-x-[24px] items-center ">
                        <img className="h-[74px] rounded-full" src="/img/solana.webp" alt="" />
                        <span>make solana great again</span>
                    </div>
                    <div className="flex space-x-[24px] items-center">
                        <img className="h-[74px] rounded-full" src="/img/tiker.webp" alt="" />
                        <span>MSGA</span>
                    </div>
                </div>
            </Marquee>

            <div className="bg-[#000] flex flex-col items-center justify-start py-[90px] w-full sm:py-[60px] sm:px-[16px]">
                
                <div className="flex flex-col items-center max-w-[620px] w-full">
                    <span className="mb-[48px] text-[44px] font-semibold uppercase text-white sm:text-[32px] mb-[32px]">Tokenomic</span> 
                    <div className="flex flex-col mb-[48px] space-y-[24px] w-full">
                        {tokenInfo.map((item, itemIndex) => {
                            return (
                                <div className="flex items-center justify-between py-[8px]">
                                    <div className="flex flex-col items-start justify-start space-y-[4px]">
                                        <span className="text-white opacity-50 text-[20px] font-light sm:text-[16px]">{item?.title}</span>
                                        <span className="text-white text-[24px] font-light sm:text-[20px]">{item?.value}</span>
                                    </div>
                                    {item?.isCopied && item?.value && (
                                        <button onClick={() => copyToClipBoard(item?.value)} className="flex item-center justify-center">
                                            <img className="h-[40px] w-[40px] sm:w-[32px] sm:h-[32px]" src="/img/copy.svg" alt="" />
                                        </button>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <div className="relative">
                        <img className="w-full" src="/img/twit.webp" alt="" />
                        <img className="absolute right-[-30%] bottom-[-30%] h-[286px] sm:h-[180px] sm:right-[-15%]" src="/img/trump.webp" alt="" />
                    </div>
                </div>
            </div>
            
            <div className="bg-white min-h-[392px] sm:min-h-[250px] flex items-center justify-center w-full pt-[28px] pb-[72px] sm:pb-[39px]">
                <div className="max-w-[575px] uppercase text-center w-full flex flex-col items-center justify-center">
                    <span className="text-[36px] leading-[44px] font-semibold text-[#0F1419] mb-[16px] sm:text-[16px] sm:leading-[18px]">Want a pro launch <br/> on pumpfun?</span>
                    <span className="text-[#000] text-[24px] leading-[28px] font-medium text-center mb-[35px] sm:txet-[14px] sm:leading-[20px]">Use <span className="text-[#F46F51] text-italic">Rocket Launcher</span> and get 50% off on your first launch with my promo code</span>
                    <div className="relative w-fit">
                        <img className="absolute left-[-15%] bottom-[0px] h-[55px] sm:h-[22px]" src="/img/bundler.webp" alt="" />
                        <div onClick={() => copyToClipBoard('8H66J2DL')} className="cursor-pointer text-[80px] font-bold text-[#000] leading-[97px] sm:text-[32px] sm:leading-[40px]">8H66J2DL</div>
                        <img className="absolute right-[-15%] bottom-[0px] h-[55px] sm:h-[22px]" src="/img/rl-logo.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="h-[400px] sm:h-[350px] bg-[#000] flex flex-col items-center justify-center space-y-[80px] w-full sm:space-y-[40px]">
                <div className="relative mx-auto w-full">
                    {renderSocial('bottom-0')}
                </div>
                <div className="sm:w-[90%]">
                    {buyLinkRender()}
                </div>
            </div>
        </div>
    )
}