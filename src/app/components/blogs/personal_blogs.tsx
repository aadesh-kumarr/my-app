import { Datatype } from "@/type";

export default function Personal_blogs({ blog }: { blog: Datatype }) {
  return (
    <div className="p-4 mx-auto max-w-4xl">
      <div className="border border-neutral-600 bg-neutral-900 p-6 rounded-lg shadow-sm shadow-neutral-800">
        
        {/* Convert blog.date to Date object */}

        <p className="text-4xl text-amber-400 text-left font-semibold mb-4">
          {blog.title}
        </p>
        <div className="flex flex-row justify-between">
        <p className="text-justify text-gray-300 leading-relaxed">
          {blog.link}
        </p>
          {new Date(blog.date).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
          </div>
      </div>
    </div>
  );
}
