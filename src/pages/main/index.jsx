import React from "react";
import copyToClipBoard from 'copy-to-clipboard';
import Marquee from 'react-fast-marquee';

export const Main = () => {

    const buyLink = 'https://raydium.io/swap/?outputCurrency=s9dBr5LK2QAHxEQgYaciWxqbdtAy2rbLRHv3xWhpump&inputMint=sol&outputMint=s9dBr5LK2QAHxEQgYaciWxqbdtAy2rbLRHv3xWhpump';

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
            title: 'Contact Address',
            value: '0',
            isCopied: true,
        },
        {
            title: 'Contact Address',
            value: '0'
        },
        {
            title: 'TAX',
            value: '0'
        },
        {
            title: 'Liquidity Pool',
            value: '0'
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

      const buyLinkRender = () => {
        return (
            <a href={buyLink} target="_blank" className="h-[64px] sm:h-[48px] w-[202px] flex items-center justify-center" rel="noreferrer">
                <img src="/img/buyToken.webp" alt="" />
            </a>
        )
      }
    
    return (
        <div className="flex flex-col items-center justify-start">
            <div className="relative main min-h-screen w-screen flex items-center justify-center">
                <div className="py-[18px] px-[32px] flex items-center justify-end sm:flex-col sm:justify-center sm:space-y-[20px] fixed top-0 left-1/2 -translate-x-1/2 max-w-[1200px] sm:max-w-full w-full">
                    {buyLinkRender()}
                </div>
                <img className="max-h-[620px] h-[57vh] sm:max-h-[280px]" src="/img/token.webp" alt="" />
                {renderSocial('bottom-[40px] sm:bottom-[24px]')}
            </div>

            <Marquee className="!flex h-[100px]" gradient gradientColor="#000" gradientWidth={50} autoFill>
                <div className="flex space-x-[24px] items-center uppercase text-[32px] text-white">
                    <div className="flex space-x-[24px] items-center ">
                        <img className="h-[74px]" src="/img/solana.webp" alt="" />
                        <span>make solana great again</span>
                    </div>
                    <div className="flex space-x-[24px] items-center">
                        <img className="h-[74px]" src="/img/tiker.webp" alt="" />
                        <span>MSGA</span>
                    </div>
                </div>
            </Marquee>

            <div className="flex flex-col items-center justify-start py-[90px]">
                
                <div className="flex flex-col items-center max-w-[620px] w-full">
                    <span className="mb-[48px] text-[44px] font-semibold uppercase text-white">Tokenomic</span> 
                    <div className="flex flex-col mb-[48px] space-y-[24px] w-full">
                        {tokenInfo.map((item, itemIndex) => {
                            return (
                                <div className="flex items-center justify-between py-[8px]">
                                    <div className="flex flex-col items-start justify-start space-y-[4px]">
                                        <span className="text-white opacity-50 text-[20px] leading-[28px] font-light">{item?.title}</span>
                                        <span className="text-white text-[24px] leading-[20px] font-light">{item?.value}</span>
                                    </div>
                                    {item?.isCopied && item?.value && (
                                        <button onClick={() => copyToClipBoard(item?.value)} className="flex item-center justify-center">
                                            <img className="h-[40px] w-[40px]" src="/img/copy.svg" alt="" />
                                        </button>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <div className="relative">
                        <img className="w-full" src="/img/twit.webp" alt="" />
                        <img className="absolute right-[-30%] bottom-[-30%] h-[286px]" src="/img/trump.webp" alt="" />
                    </div>
                </div>
            </div>
            
            <div className="bg-white min-h-[392px] flex items-center justify-center w-full pt-[28px] pb-[72px]">
                <div className="max-w-[575px] uppercase text-center w-full flex flex-col items-center justify-center">
                    <span className="text-[36px] leading-[44px] font-semibold text-[#0F1419] mb-[16px]">Want a pro launch <br/> on pumpfun?</span>
                    <span className="text-[#000] text-[24px] leading-[28px] font-medium text-center mb-[35px]">Use <span className="text-[#F46F51] text-italic">Rocket Launcher</span> and get 50% off on your first launch with my promo code</span>
                    <div className="relative w-fit">
                        <img className="absolute left-[-15%] bottom-[0px] h-[55px]" src="/img/bundler.webp" alt="" />
                        <div onClick={() => copyToClipBoard('8H66J2DL')} className="cursor-pointer text-[80px] font-bold text-[#000] leading-[97px]">8H66J2DL</div>
                        <img className="absolute right-[-15%] bottom-[0px] h-[55px]" src="/img/rl-logo.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="h-[500px] bg-[#000] flex flex-col items-center justify-center space-y-[80px] w-full">
                <div className="relative mx-auto w-full">
                    {renderSocial('bottom-0')}
                </div>
                {buyLinkRender()}
            </div>
        </div>
    )
}