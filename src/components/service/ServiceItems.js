import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Web Design",
    text: [
      "My mission is to create user-friendly and visually appealing websites that engage and inspire. From responsive designs to seamless user interfaces, I focus on the finer details to ensure exceptional user experiences.",
    ],
    image: "assets/img/news/GamesMode.png",
  },
  {
    id: 2,
    name: "UI/UX Design",
    text: [
      "As a frontend developer, I have a proficient skill set that extends beyond coding and programming. I am adept at leveraging design tools to enhance the development process, and one such tool that I excel in is Figma. With my expertise in Figma, I can seamlessly bridge the gap between design and development. Figma is a powerful collaborative design tool that allows designers and developers to work together in a cohesive and efficient manner. When I work with Figma, I can extract design assets, styles, and specifications, ensuring that the frontend development aligns perfectly with the intended visual and user experience",
    ],
    image: "assets/img/news/uiux.png",
  },
  {
    id: 3,
    name: "Frontend Frameworks",
    text: [
      "As a frontend developer, I bring a wealth of experience and expertise in working with JavaScript frameworks such as React.js, along with popular frontend frameworks like Bootstrap and Tailwind CSS. These frameworks have been instrumental in shaping modern web development, and I've harnessed their power to deliver exceptional frontend experiences. However, I am not content with just my current skill set. The field of frontend development is constantly evolving, and I am eagerly looking forward to exploring and mastering more frontend frameworks. My commitment to continuous learning means that I am always on the lookout for emerging technologies and frameworks that can further enhance my capabilities as a frontend developer.",
    ],
    image: "assets/img/news/react.jpg",
  },
  {
    id: 4,
    name: "Version Control",
    text: [
      "I leverage GitHub as a valuable tool in my development workflow. GitHub plays a crucial role in managing code, collaborating with teams, and ensuring the organized development and deployment of web projects.",
    ],
    image: "assets/img/news/git-github.png",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
