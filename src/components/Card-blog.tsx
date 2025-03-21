import { Merriweather } from "next/font/google";
import Link from "next/link";

const merriweather = Merriweather({
  subsets: ["latin"],
  style: "normal",
  weight: "700",
});

const posts = [
  {
    slug: "post-1",
    category: "Mercados",
    title:"Petróleo fecha em alta e marca 2ª semana consecutiva de ganhos com quadro geopolítico",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu.",
    author: "Walter Hartwell White",
    date: "21/03/2025",
    image:"https://www.infomoney.com.br/wp-content/uploads/2024/12/2024-12-18T220110Z_1_LYNXMPEKBH0WZ_RTROPTP_4_COLUMN-MAGUIRE-ENERGY.jpg?fit=906%2C604&quality=70&strip=all",
    img_perfil: "https://i.pinimg.com/236x/68/06/76/68067640e13da1ade6ac5ad14c394626.jpg",
  },
  {
    slug: "post-2",
    category: "Política",
    title: "Moraes vota para condenar mulher que pichou “Perdeu, mané” no STF a 14 anos de prisão",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu",
    author: "Batman",
    date: "21/03/2025",
    image: "https://www.infomoney.com.br/wp-content/uploads/2025/03/ja08717_0.webp?w=1200&quality=70&strip=all",
    img_perfil: "https://i.pinimg.com/474x/9f/96/a9/9f96a99b59d096105190218f3e805c54.jpg",
  },
];

export function CardBlog() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-4 sm:px-10 md:px-20 lg:px-60 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:w-3/4">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="w-fit px-2 py-1 mb-4 bg-[#283A61] rounded-md">
                  <span className="text-white text-sm">{post.category}</span>
                </div>
                <p
                  className={`text-md font-semibold truncate ${merriweather.className}`}
                >
                  {post.title}
                </p>
                <p className="text-gray-600 text-sm">{post.description}</p>
                <div className="mt-2 flex items-center">
                  <img
                    src={post.img_perfil}
                    alt={post.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-black text-sm">{post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
