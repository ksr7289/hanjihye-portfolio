export default function Portfolio(){return (<div className='min-h-screen bg-black text-white p-6 md:p-8 font-sans'>
<section className='max-w-6xl mx-auto py-20 text-center'>
<h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-4'>Han Jihye Portfolio ✦</h1>
<p className='text-zinc-400 text-xl mb-10'>Cinematic AI Video Creator · Award Works · Storytelling Through Visuals</p>
<div className='flex gap-4 justify-center mb-10'><a href='#works' className='px-6 py-3 rounded-2xl bg-white text-black font-semibold'>View Works</a><a href='mailto:ksr7289@naver.com' className='px-6 py-3 rounded-2xl border border-zinc-700'>Hire Me</a></div>
</section>
<section id='works' className='max-w-6xl mx-auto py-14'>
<h2 className='text-3xl font-semibold mb-8'>Featured Works</h2>
<div className='grid md:grid-cols-3 gap-6'>
{[
['1. Suwon City Award','https://www.youtube.com/embed/yuGVkYA1sX8'],
['2. Gongju Baekje Memory','https://www.youtube.com/embed/WmhjYAPShwg'],
['3. Dreaming Arirang Contest','https://www.youtube.com/embed/4x79aJ2l66E']
].map((item,i)=><div key={i} className='rounded-3xl border border-zinc-800 bg-zinc-950 p-6'>
<div className='aspect-video mb-4'><iframe className='w-full h-56' src={item[1]} title={item[0]} allowFullScreen/></div>
<p>{item[0]}</p></div>)}
</div></section>
<section className='max-w-6xl mx-auto py-16 text-center'><a href='mailto:ksr7289@naver.com'>ksr7289@naver.com</a></section>
</div>)}