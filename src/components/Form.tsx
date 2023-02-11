"use client"

const Form = () => {
return (
  <form className="w-full gap-5 bg-white shadow-md border p-5 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
    {/* header */}
    <h1 className="sm:col-span-2 md:col-span-3 lg:col-span-4 text-center font-bold text-3xl">
      The Form
    </h1>

    {/* name and last name  */}
    <section className="flex flex-col ">
      <label htmlFor="name">الاسم</label>
      <input
        id="name"
        type="text"
        className="border h-10 p-2 rounded-lg shadow-sm focus:shadow-inner focus:outline-none"
      />
      <span className="text-red-500 text-xs font-normal">
        هناك خطأ في هاذا !
      </span>
    </section>

    <section className="flex justify-center items-center sm:col-span-2 md:col-span-3 lg:col-span-4">
      <button className="w-[50%] rounded-lg h-10 bg-stone-700 text-white    text-center font-bold text-xl shadow-md hover:shadow-sm hover:bg-stone-700/90 duration-100">
        اطلب الآن
      </button>
    </section>
  </form>
);
}

export default Form