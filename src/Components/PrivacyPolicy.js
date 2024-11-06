import React from 'react'
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
       <div class="container mx-auto px-4 py-8">
        <h1 className='font-extrabold text-5xl text-center my-14 text-[#256A41]'><Link href="/" >UstazPortal</Link> Privacy Policy</h1>
        <p className='text-xl my-4 '>Our privacy policy is crafted to collect, safeguard, and maintain client information for individuals utilizing our services at <Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link>. We are committed to delivering premium Quran tuition services, and this vital information will help you foster trust in the services we provide. Please review the details of our privacy policy to clarify any questions about how we manage your personal information.</p>
        <ul class="list-disc list-inside mb-4">
        <h1 class="text-2xl font-bold mb-4">1. User Information</h1>
        <p className='text-xl  my-2'>We gather your personal details to ensure optimal service delivery. Should you encounter any issues while using our online services, feel free to reach out to us; we are just an email away! The following information is required to address concerns:</p>
          <li className="my-2 text-lg"> Name</li>
    <li className="my-2 text-lg"> Email</li>
   <li className="my-2 text-lg">Mobile phone number</li>   
        </ul>
        <p className='text-xl my-2'>
Rest assured, we do not disclose your personal details to the public. Trust us and immerse yourself in the divine teachings of the Quran with <Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link>!</p>


<ul class="list-disc list-inside mb-4">
<h1 class="text-xl font-bold mb-4">2. Handling of User Information</h1>
        
    <li className="my-2 text-lg"> To ensure that our subscribers receive top-notch service, we utilize user information as feedback to enhance and adjust our offerings, aiming to set standards in a competitive environment.</li>
   <li className="my-2 text-lg">We tailor the user experience by addressing concerns and implementing suggestions provided by our valued service users via the contact us option.</li>   
        </ul>

<ul class="list-disc list-inside mb-4">
<h1 class="text-2xl font-bold mb-4">3. Device Information</h1>
        
    <li className="my-2 text-lg"> Device information encompasses details about your browser, laptop, and other devices used during Quran Reading. However, this technological tracking never reveals the identity of individual visitors.</li>
        </ul>

<ul class="list-disc list-inside mb-4">
<h1 class="text-2xl font-bold mb-4">4. Processing of Analytical Data</h1>
        
    <li className="my-2 text-lg"> We employ third-party analytics to analyze usage patterns on the <Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link> site, providing analysis, reports, and insights without disclosing the name or privacy of individual visitors to our site.</li>
        </ul>

<ul class="list-disc list-inside mb-4">
<h1 class="text-2xl font-bold mb-4">5. Google Advertising Assistance</h1>
        
    <li className="my-2 text-lg"> 
Google is a provider that detects advertisements and displays them on <Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link>. Google employs targeted marketing using cookies, which can be disabled through Ad Settings. Additionally, you can opt-out of a third-party vendors use of cookies via AboutAds.info.</li>
    <li className="my-2 text-lg">   Furthermore, other third-party ad services may utilize tracking mechanisms for advertising and retain user information for user-focused activities, over which we have no control or access.</li>
        </ul>
<ul class="list-disc list-inside mb-4">
<h1 class="text-2xl font-bold mb-4">6. Contact Us</h1>
        
    <li className="my-2 text-lg"> 
    If you have any inquiries about our privacy policies or technicalities, please reach out to us at +1 (929) 553-9388. We strive to address all inquiries promptly, regardless of their nature. You can also email us at Info@<Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link>.com, and we will gladly assist you!</li>
    <li className="my-2 text-lg">We prioritize safeguarding your privacy to the fullest extent possible but lack access to third-party cookie control mechanisms..</li>
        </ul>
    </div>
  )
}

export default PrivacyPolicy
