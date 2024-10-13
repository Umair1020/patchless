import React from 'react'
import Haeder from './components/Haeder'


const Landingpage = () => {
  return (
    <div>
      <Haeder />
      {/* <Banner /> */}
      <main id="content" className="prose prose-primary max-w-full layout-grid dark:prose-invert  prose prose-primary max-w-full layout-grid dark:prose-invert">
      <h2 class="mb-2 mt-10 text-center  md:mt-16" style={{color: "#FF2424" , fontSize: "35px" , }}>
        Your Ultimate Source for Personalized Patches
      </h2>
      <br />

      <div class="items-center gap-12 md:flex md:flex-nowrap">

        <div class="md:w-2/3 col-lg-8 text-center mx-auto">
          <p>
          US Digitize, we don't just create patches—we help you tell your story. As the leading provider of custom embroidered and iron-on patches, our passion and commitment lie in creating high-quality patches for any and all purposes. Be it for sports teams, businesses, military units, law enforcement, motorcycle clubs, events, camping, scouting, or martial arts—you name it, we create it.
          <br /> <br />
Our exclusive focus on custom patches is what sets us apart. We are more than a provider, we are your partner. Our goal is to make the process of ordering your patches straightforward, fast, and enjoyable. Let us help bring your vision to life with our expertise and dedication to excellence.
          </p>

         
        </div>
      </div> <br /><br />
      <img  class="mx-auto mask mask-size-contain w-50"
                src="/patch.png" loading="lazy" width="1300" height="372"
                alt="A row of six embroidered patches, each representing different fictional motifs and organizations including Ruby The Hatchet, The Walking Dead,Force Security, AIM-9M, Chabelly, Fire Dept., and U.S. Forest Service"
                title="Exclusive custom patch design creations for brands like Ruby The Hatchet, The Walking Dead, Force Security, AIM-9M, Chabelly, Fire Dept., and the U.S. Forest Service" />

<h2 class="clear-both text-center" style={{color: "#FF2424"  }}>We Make Custom Patches for Every Purpose</h2>
            <p class="clear-both text-center w-75 mx-auto" >
            Custom Patches are incredibly versatile, serving a multitude of purposes. Whether you aim to enhance the identity of your sports team, increase your business branding, decorate uniforms, commemorate a special event, or encourage unity within your military unit or motorcycle club, our patches are the perfect solution. US Digitize, we specialize in creating personalized patches for every imaginable purpose.
            </p>
<div className='container'>
            <ul class="grid list-none grid-cols-2 gap-4 pl-0 md:grid-cols-2">
                <li>
                    <div class="-mb-6 flex items-center gap-6">
                        <img src="/police-uniform 1.png" width="361" height="338" alt="" class="size-16"
                            loading="lazy" />
                        <h3 class="my-0">Uniforms and Apparel</h3>
                    </div>
                    <p>
                        Our custom patches are ideal for all types of uniforms—from sports teams and martial arts clubs
                        to
                        military units and security services. They add a professional touch to work apparel, fostering a
                        sense of pride and belonging among team members.
                    </p>
                </li>
                <li>
                    <div class="-mb-6 flex items-center gap-6">
                        <img src="/asset/images/business.webp" width="356" height="315" alt="" class="size-16"
                            loading="lazy" />
                        <h3 class="my-0">Businesses and Nonprofits</h3>
                    </div>
                    <p>
                        For businesses and nonprofit organizations, custom patches are essential for branding and
                        identity.
                        They can be used on employee uniforms for a cohesive look, given away at events as unique
                        promotional items, or even sold as a fundraising tool.
                    </p>
                </li>
                <li>
                    <div class="-mb-6 flex items-center gap-6">
                        <img src="/asset/images/personal.webp" width="371" height="299" alt="" class="size-16"
                            loading="lazy" />
                        <h3 class="my-0">Personal Use</h3>
                    </div>

                    <p>
                        Our patches aren’t just for organizations—they’re perfect for individuals too. Want to add a
                        touch
                        of personality to your jackets, bags, hats, or other personal items? Our patches are a great way
                        to
                        showcase your interests, hobbies, or personal motto.
                    </p>
                </li>

                <li>
                    <div class="-mb-6 flex items-center gap-6">
                        <img src="/asset/images/event.webp" width="353" height="369" alt="" class="size-16"
                            loading="lazy" />
                        <h3 class="my-0">Events and Commemorations</h3>
                    </div>

                    <p>
                        Custom patches are a fantastic way to commemorate significant events, whether it’s a scout’s
                        first
                        camping trip, a motorcycle club’s annual gathering, or a company milestone. These keepsakes
                        carry
                        the memory of the event, creating a lasting bond among those who shared in the experience.
                    </p>
                </li>
            </ul>
            </div>
</main>
    </div>
  )
}

export default Landingpage