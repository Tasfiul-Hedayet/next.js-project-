import Image from 'next/image'

function payment () {
  return (
    <>
    <h1>Subscription </h1>
    <div className = "logo">
    <Image src = "/pay.jpg" width={300} height={200} />
    </div>
    <button> <a href="/submit"> Purchase </a> </button>
    </>
    
  )
}

export default payment