import React from 'react'

const FAQ = () => {
  const textOpener = (e) => {
    let textSection = e.currentTarget.nextElementSibling
    if (textSection.style.maxHeight) textSection.style.maxHeight = null;
    else textSection.style.maxHeight = textSection.scrollHeight + "px"

    e.currentTarget.parentElement.classList.toggle('openedText')

    let innerText = e.currentTarget.lastElementChild.innerText
    if (innerText == '+') { e.currentTarget.lastElementChild.innerText = '-'; e.currentTarget.lastElementChild.style.color = '#7D4AEA';e.currentTarget.lastElementChild.style.borderColor = '#7D4AEA' }
    else { e.currentTarget.lastElementChild.innerText = '+'; e.currentTarget.lastElementChild.style.color = '#777777';e.currentTarget.lastElementChild.style.borderColor = '#777777' }
    e.currentTarget.classList.toggle('openedHeader')
}
  return (
    <div className="w-full bigscreen:w-10/12">
      <div className="font-semibold text-4xl text-center mb-16">Frequently Asked Questions</div>
      <div className="border-t-4">
        <div onClick={textOpener} className="flex cursor-pointer transition-all  group text-[#777777] items-center justify-between px-6 py-4">
          <div className=" font-semibold text-lg transition-all group-hover:text-black">How do I pay for the essentials or premium plan?</div>
          <div className="text-2xl border-2 w-6 h-6 border-[#777777] flex items-center justify-center rounded-full">+</div>
        </div>
        <div className="px-6 pr-72 max-h-0 overflow-hidden transition-all">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum luctus ante a pretium.
            Fusce facilisis vestibulum interdum. Aliquam ut tellus bibendum, hendrerit nibh placerat,
            consequat quam. Vivamus imperdiet, libero et efficitur faucibus, enim lacus gravida mi,
            quis cursus justo nulla ut erat.
          </p>
        </div>
      </div>
      <div className="border-t-4">
        <div onClick={textOpener} className="flex cursor-pointer transition-all group text-[#777777] items-center justify-between px-6 py-4">
          <div className=" font-semibold text-lg transition-all group-hover:text-black">Can I cancel my essentials or premium plan subscription at my time?</div>
          <div className="text-2xl border-2 w-6 h-6 flex border-[#777777] items-center justify-center rounded-full">+</div>
        </div>
        <div className="px-6 pr-72 max-h-0 overflow-hidden transition-all">
          <p>
            You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
            automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in
            United States). We will renew your subscription automatically at the end of every billing cycle.
          </p>
        </div>
      </div>
      <div className="border-t-4">
        <div onClick={textOpener} className="flex cursor-pointer transition-all group text-[#777777] items-center justify-between px-6 py-4">
          <div className=" font-semibold text-lg transition-all group-hover:text-black">How do I pay for the essentials or premium plan?</div>
          <div className="text-2xl border-2 w-6 h-6 border-[#777777] flex items-center justify-center rounded-full">+</div>
        </div>
        <div className="px-6 pr-72 max-h-0 overflow-hidden transition-all">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum luctus ante a pretium.
            Fusce facilisis vestibulum interdum. Aliquam ut tellus bibendum, hendrerit nibh placerat,
            consequat quam. Vivamus imperdiet, libero et efficitur faucibus, enim lacus gravida mi,
            quis cursus justo nulla ut erat.
          </p>
        </div>
      </div>
      <div className="border-t-4">
        <div onClick={textOpener} className="flex cursor-pointer transition-all group text-[#777777] items-center justify-between px-6 py-4">
          <div className=" font-semibold text-lg transition-all group-hover:text-black">We need to add new users to our team, how will that be billed?</div>
          <div className="text-2xl border-2 w-6 h-6 border-[#777777] flex items-center justify-center rounded-full">+</div>
        </div>
        <div className="px-6 pr-72 max-h-0 overflow-hidden transition-all">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum luctus ante a pretium.
            Fusce facilisis vestibulum interdum. Aliquam ut tellus bibendum, hendrerit nibh placerat,
            consequat quam. Vivamus imperdiet, libero et efficitur faucibus, enim lacus gravida mi,
            quis cursus justo nulla ut erat.
          </p>
        </div>
      </div>
      <div className="border-t-4">
        <div onClick={textOpener} className="flex cursor-pointer transition-all group text-[#777777] items-center justify-between px-6 py-4">
          <div className=" font-semibold text-lg transition-all group-hover:text-black">How do I pay for the essentials or premium plan?</div>
          <div className="text-2xl border-2 w-6 h-6 border-[#777777] flex items-center justify-center rounded-full">+</div>
        </div>
        <div className="px-6 pr-72 max-h-0 overflow-hidden transition-all">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum luctus ante a pretium.
            Fusce facilisis vestibulum interdum. Aliquam ut tellus bibendum, hendrerit nibh placerat,
            consequat quam. Vivamus imperdiet, libero et efficitur faucibus, enim lacus gravida mi,
            quis cursus justo nulla ut erat.
          </p>
        </div>
      </div>
      <div className="border-t-4 border-b-4">
        <div onClick={textOpener} className="flex cursor-pointer transition-all group text-[#777777] items-center justify-between px-6 py-4">
          <div className=" font-semibold text-lg transition-all group-hover:text-black">Can I cancel my essentials or premium plan subscription at my time?</div>
          <div className="text-2xl border-2 w-6 h-6 border-[#777777] flex items-center justify-center rounded-full">+</div>
        </div>
        <div className="px-6 pr-72 max-h-0 overflow-hidden transition-all">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum luctus ante a pretium.
            Fusce facilisis vestibulum interdum. Aliquam ut tellus bibendum, hendrerit nibh placerat,
            consequat quam. Vivamus imperdiet, libero et efficitur faucibus, enim lacus gravida mi,
            quis cursus justo nulla ut erat.
          </p>
        </div>
      </div>      

      
    </div>
  )
}

export default FAQ