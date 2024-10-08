import React, { useState } from 'react';
import { Carousel, Menu, Modal } from 'antd';
import "../index.css";
import { Link, Outlet } from 'react-router-dom';
import MenuItem from 'antd/es/menu/MenuItem';
import Register from './Register';




const HomePage = () => {

    const carousel = [
        {
            id: 1,
            hName: "𝑻𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎 𝒘𝒊𝒕𝒉 𝑷𝒓𝒂𝒏𝒊𝒄 𝑯𝒆𝒂𝒍𝒊𝒏𝒈",
            paragraph: "Our comprehensive healthcare platform offers personalized solutions to help you on your journey to wellness. Discover a seamless experience tailored to your unique needs.",
            img: "newslider.jpeg"
        }
    ]

    const sec1 = [
        {
            id: 1,
            hName: "Personalized Treatment",
            paragraph: "Our team of experts collaborates to create customized care plans that address your holistic well-being.",
            img: "section2img1.jpeg",
        },
        {
            id: 2,
            hName: "Integrative Approaches",
            paragraph: "We combine conventional and complementary therapies to provide a multifaceted path to healing.",
            img: "section2img2.jpeg",
        },
        {
            id: 3,
            hName: "Continuous Support",
            paragraph: "Your health and progress are  our priority, with ongoing guidance and follow-up to ensure your success.",
            img: "section2img3.jpeg",
        },
    ]

    const sec2 = [
        {
            id: 1,
            hName: "Quick and Efficient",
            paragraph: "Our user-friendly platform allows you to complete the registration process in just a few simple steps.",
            img: "section2img1.jpeg",
        },
        {
            id: 2,
            hName: "Secure Data Collection",
            paragraph: "We prioritize the protection of your personal information through advanced data encryption and privacy measures.",
            img: "section2img2.jpeg",
        },
        {
            id: 3,
            hName: "Personalized Profiles",
            paragraph: "Your unique profile is created to ensure your healthcare journey is tailored to your specific needs.",
            img: "section2img3.jpeg",
        },
        {
            id: 3,
            hName: "Streamlined Accessibility",
            paragraph: "Access your personal information and treatment history anytime, anywhere, through our secure online portal.",
            img: "section2img3.jpeg",
        },
    ]

    const sec3 = [
        {
            id: 1,
            hName: "End-to-End Encryption",
            paragraph: "Your sensitive information is protected using advanced encryption techniques, ensuring the confidentiality of your data.",
            img: "section2img1.jpeg",
        },
        {
            id: 2,
            hName: "HIPAA Compliance",
            paragraph: "We adhere to the highest industry standards for healthcare data privacy and security, giving you peace of mind.",
            img: "section2img2.jpeg",
        },
        {
            id: 3,
            hName: "Transparent Policies",
            paragraph: "Our privacy policy outlines our commitment to safeguarding your information and respecting your data rights.",
            img: "section2img3.jpeg",
        },
        {
            id: 3,
            hName: "Secure Data Storage",
            paragraph: "Your records are stored in a highly protected, HIPAA-compliant environment, accessible only to authorized personnel.",
            img: "section2img3.jpeg",
        },
    ]
    const sec4 = [
        {
            id: 1,
            hName: "End-to-End Encryption",
            paragraph: "Your sensitive information is protected using advanced encryption techniques, ensuring the confidentiality of your data.",
            img: "section2img1.jpeg",
        },
        {
            id: 2,
            hName: "HIPAA Compliance",
            paragraph: "We adhere to the highest industry standards for healthcare data privacy and security, giving you peace of mind.",
            img: "section2img2.jpeg",
        },
        {
            id: 3,
            hName: "Transparent Policies",
            paragraph: "Our privacy policy outlines our commitment to safeguarding your information and respecting your data rights.",
            img: "section2img3.jpeg",
        },
        {
            id: 3,
            hName: "Secure Data Storage",
            paragraph: "Your records are stored in a highly protected, HIPAA-compliant environment, accessible only to authorized personnel.",
            img: "section2img3.jpeg",
        },
    ]
    const [isOpenRegister, setIsOpenRegister] = useState(false)
    return (
        <div className=' '>

            <Carousel autoplay>
                <div className='text-white'>
                    {
                        carousel.map(it => (
                            <div className='block mx-3'>
                                <h1 className='text-[2rem]  text-white font-bold sm:text-[1.5rem]'>{it.hName}</h1>
                                <p className='text-[1rem] text-gray-400'>{it.paragraph}</p>
                                <div className=' text-center mt-5 mb-3 '>
                                    <button onClick={() => setIsOpenRegister(true)} className='text-white border p-3 rounded-xl px-4 hover:text-black hover:bg-white '>REGISTER NOW</button>
                                </div>
                                <div className='mt-5 mb-5'>
                                    <img src={it.img} alt="" className='h-auto w-auto  mx-auto rounded-2xl' />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-white'>
                    {
                        carousel.map(it => (
                            <div className='block mx-3'>
                                <h1 className='text-[2rem]  text-white font-bold sm:text-[1.5rem]'>{it.hName}</h1>
                                <p className='text-[1rem] text-gray-400'>{it.paragraph}</p>
                                <div className=' text-center mt-5 mb-3 '>
                                    <button onClick={() => setIsOpenRegister(true)} className='text-white border p-3 rounded-xl px-4 hover:text-black hover:bg-white '>REGISTER NOW</button>
                                </div>
                                <div className='mt-5 mb-5'>
                                    <img src={it.img} alt="" className='h-auto w-auto  mx-auto rounded-2xl' />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-white'>
                    {
                        carousel.map(it => (
                            <div className='block mx-3'>
                                <h1 className='text-[2rem]  text-white font-bold sm:text-[1.5rem]'>{it.hName}</h1>
                                <p className='text-[1rem] text-gray-400'>{it.paragraph}</p>
                                <div className=' text-center mt-5 mb-3 '>
                                    <button onClick={() => setIsOpenRegister(true)} className='text-white border p-3 rounded-xl px-4 hover:text-black hover:bg-white '>REGISTER NOW</button>
                                </div>
                                <div className='mt-5 mb-5'>
                                    <img src={it.img} alt="" className='h-auto w-auto  mx-auto rounded-2xl' />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-white'>
                    {
                        carousel.map(it => (
                            <div className='block mx-3'>
                                <h1 className='text-[2rem]  text-white font-bold sm:text-[1.5rem]'>{it.hName}</h1>
                                <p className='text-[1rem] text-gray-400'>{it.paragraph}</p>
                                <div className=' text-center mt-5 mb-3 '>
                                    <button onClick={() => setIsOpenRegister(true)} className='text-white border p-3 rounded-xl px-4 hover:text-black hover:bg-white '>REGISTER NOW</button>
                                </div>
                                <div className='mt-5 mb-5'>
                                    <img src={it.img} alt="" className='h-auto w-auto  mx-auto rounded-2xl' />
                                </div>
                            </div>
                        ))
                    }
                </div>


            </Carousel>

            <section className='text-center mt-6  pb-10 mx-3'>

                <div className='text-center'>
                    <h1 className='text-[2rem] text-white font-bold mb-10'>ᴄᴏᴍᴘʀᴇʜᴇɴꜱɪᴠᴇ ʜᴇᴀʟᴛʜᴄᴀʀᴇ ꜱᴇʀᴠɪᴄᴇꜱ</h1>
                </div>
                <div className='block mx-3'>
                    <div className=' '>
                        {
                            sec1.map(it => (
                                <div key={it.id} className={`text-white`}>
                                    <div>
                                        <h1 className='text-[1.5rem]  text-white font-bold sm:text-[1.5rem]'>{it.hName}</h1>
                                        <p className='text-[1rem] text-gray-400'>{it.paragraph}</p>
                                    </div>
                                    <div className='mt-5 mb-5'>
                                        <img src={it.img} alt="" className='h-auto w-auto  mx-auto rounded-2xl' />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            <section className=' text-center pb-5 mx-3 '>
                <div className='text-center' >
                    <h1 className='text-[1.9rem] text-white font-bold mb-10 '>Seamless Registration Process</h1>
                </div>
                <div className='block mx-3'>
                    <div className=' '>
                        {
                            sec2.map(it => (
                                <div key={it.id} className={`text-white`}>
                                    <div>
                                        <h1 className='text-[1.5rem]  text-white font-bold sm:text-[1.5rem]'>{it.hName}</h1>
                                        <p className='text-[1rem] text-gray-400'>{it.paragraph}</p>
                                    </div>
                                    <div className='mt-5 mb-5'>
                                        <img src={it.img} alt="" className='h-auto w-auto  mx-auto rounded-2xl' />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            <section className='text-center pb-5 mx-3'>
                <div>
                    <h1 className='text-[1.7rem] text-white font-bold mb-10'>Secure Data Collection and Privacy</h1>
                </div>

                <div className='block mx-3'>
                    <div className=' '>
                        {
                            sec3.map(it => (
                                <div key={it.id} className={`text-white`}>
                                    <div>
                                        <h1 className='text-[1.5rem]  text-white font-bold sm:text-[1.5rem]'>{it.hName}</h1>
                                        <p className='text-[1rem] text-gray-400'>{it.paragraph}</p>
                                    </div>
                                    <div className='mt-5 mb-5'>
                                        <img src={it.img} alt="" className='h-auto w-auto  mx-auto rounded-2xl' />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* 
    <section className='text-center pb-5 mx-3'>
      <div>
        <h1 className='text-[1.7rem] text-white font-bold mb-10'>Personalized Treatment Plans</h1>
      </div>

      <div className=''>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Assessment
          </h1>
          <p className='text-gray-400'>Our experienced clinicians conduct a comprehensive evaluation to understand
            your unique health concerns.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Collaboration</h1>
          <p className='text-gray-400'>We work closely with you to develop a customized treatment plan that aligns with
            your goals and preferences.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Implementation
          </h1>
          <p className='text-gray-400'>Your personalized plan is seamlessly executed, with ongoing monitoring and
            adjustments as needed.</p>
        </div>
      </div>
    </section>

    <section className='text-center pb-5 mx-3'>
      <div>
        <h1 className='text-[1.7rem] text-white font-bold mb-10'>Integrative Medicine Approaches</h1>
      </div>

      <div className=''>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Acupuncture</h1>
          <p className='text-gray-400'>Harness the power of
            traditional Chinese
            medicine to restore
            balance and promote
            healing.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Nutritional</h1>
          <p className='text-gray-400'>Therapy
            Fuel your body with a
            customized diet to
            optimize physical and
            mental well-being.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Mindfulness </h1>
          <p className='text-gray-400'>Practices
            Cultivate inner peace
            and emotional
            resilience through
            guided meditation and
            relaxation techniques.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Physical Therapy</h1>
          <p className='text-gray-400'>Restore mobility,
            strength, and function
            through tailored
            rehabilitation programs.</p>
        </div>
      </div>
    </section>

    <section className='text-center pb-5 mx-3'>
      <div>
        <h1 className='text-[1.7rem] text-white font-bold mb-10'>Detailed Treatment History Records</h1>
      </div>

      <div className=''>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Diagnosis</h1>
          <p className='text-gray-400'>Comprehensive
            records of your
            healthcare journey,
            from initial
            assessment to
            treatment outcomes.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Treatment Plan </h1>
          <p className='text-gray-400'>Detailed
            documentation of the
            therapies,
            medications, and
            interventions
            provided throughout
            your care.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Progress Tracking </h1>
          <p className='text-gray-400'>Continuous
            monitoring of your
            symptoms, response
            to treatment, and
            overall health
            improvements.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Outcomes</h1>
          <p className='text-gray-400'>Measurable results
            and milestones
            achieved, allowing us
            to optimize your care
            over time.</p>
        </div>
      </div>
    </section>

    <section className='text-center pb-5 mx-3'>
      <div>
        <h1 className='text-[1.7rem] text-white font-bold mb-10'>Ongoing Support and Follow-up</h1>
      </div>

      <div className=''>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Continuous Guidance</h1>
          <p className='text-gray-400'>Our team is dedicated to providing you with ongoing support, advice, and
            encouragement throughout your healing journey.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Regular Check-ins </h1>
          <p className='text-gray-400'>We schedule periodic follow-up appointments to monitor your progress, address
            any concerns, and make necessary adjustments to your plan.</p>
        </div>
        <div className='border border-y-4  border-indigo-600 p-6 rounded-2xl mb-10'>
          <h1 className='text-[1.5rem] text-white font-bold mb-3 '>Accessible Resources </h1>
          <p className='text-gray-400'>Access a wealth of educational materials, wellness tips, and community support
            to empower you on your path to better health.</p>
        </div>

      </div>
    </section> */}

            <Modal
                open={isOpenRegister}
                onCancel={() => setIsOpenRegister(false)}
                footer={false}>
                <div><Register /></div>
            </Modal>

        </div>
    );
}
export default HomePage;