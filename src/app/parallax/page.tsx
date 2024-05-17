"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <div
        ref={ref}
        className="relative w-full h-screen overflow-hidden grid place-items-center"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/landscape.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y,
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          style={{ y }}
          className="font-bold text-white text-5xl text-center max-w-[800px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          nam.
        </motion.div>
      </div>

      <div className="p-6 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        illo illum sequi tempore voluptas? At commodi ipsam laborum qui veniam?
        Amet aspernatur autem dolorem doloribus earum impedit, in modi, nulla
        qui quos vitae, voluptatem? Accusamus accusantium animi assumenda,
        cumque est hic incidunt inventore ipsam ipsum natus nulla reprehenderit
        voluptates. Alias atque beatae enim eveniet harum libero ratione,
        tempora unde velit vero. Amet consequatur deserunt eveniet excepturi
        explicabo officiis omnis quibusdam, quo quos tempore. A ab accusamus
        alias animi atque consequatur cum, cupiditate deserunt doloribus error
        esse ex excepturi facilis fuga fugit hic iste itaque iusto labore
        laboriosam laborum, magnam magni minima minus modi nulla pariatur porro,
        qui quis rem repellat repellendus repudiandae rerum ullam ut velit
        veniam! Ad alias, at beatae culpa debitis dolorem eius facere inventore
        ipsa iste iusto labore laudantium natus nesciunt nihil nostrum odit
        pariatur perferendis, placeat quaerat quis quisquam quo reiciendis
        repellendus sequi sit soluta tempora tempore velit vitae. Ad aliquid
        commodi consectetur consequuntur delectus deleniti doloribus ea eius
        esse harum impedit inventore itaque iusto labore laboriosam magnam
        maxime minima minus obcaecati officia perferendis perspiciatis placeat
        praesentium quaerat quas repellendus rerum, similique sint sit totam vel
        veritatis voluptatem voluptatibus! Ab blanditiis consequuntur culpa
        debitis eos esse est et eum explicabo facilis, fuga fugit harum illo
        iure iusto maiores natus nobis optio praesentium qui quia, quis quisquam
        repudiandae sapiente suscipit tempore totam unde vel veritatis
        voluptatem? Ad adipisci aperiam corporis, ex explicabo laboriosam libero
        minus modi molestias nam provident quae quaerat quasi quia rem tempora
        temporibus vitae voluptate? Dolor doloremque dolorum iste laboriosam
        provident quam qui, repudiandae sint vitae voluptatibus. Amet at
        consequuntur dicta dignissimos ea eveniet facilis fuga iure labore
        laudantium, maxime odit praesentium, quae quis reprehenderit saepe
        tempora, temporibus ullam. Adipisci enim iure recusandae sequi tempore?
        Cupiditate, delectus, dolorem eum exercitationem id illo inventore
        maxime necessitatibus nihil officiis praesentium quis reprehenderit
        sequi vero voluptatem! Accusantium aspernatur consequuntur distinctio
        dolorem fuga inventore nobis odio odit, quam quas quasi sunt tempore
        temporibus, velit veniam vero vitae? Accusantium adipisci asperiores
        commodi deserunt dolores eos et, excepturi fugiat itaque maiores odit,
        pariatur perferendis possimus repellat sed, sit sunt vitae voluptate?
        Aut doloremque, necessitatibus. Deserunt distinctio illo quam. Accusamus
        assumenda consequatur culpa deleniti deserunt, dolor dolorum illo
        maxime, modi molestiae mollitia neque obcaecati quos soluta voluptatem!
        A ad adipisci aperiam architecto aspernatur at atque cumque dolor
        dolorem dolorum earum eum excepturi exercitationem explicabo harum iusto
        nobis obcaecati odit omnis praesentium quae, quam quas qui quia
        quibusdam quidem quis quod rerum saepe sapiente sit suscipit temporibus
        totam veritatis voluptate voluptates voluptatum. A accusantium ad
        ducimus error expedita fugit hic illum, ipsam ipsum iste iure iusto
        laborum libero minus molestias nihil nisi nostrum nulla officiis
        pariatur provident quas quasi qui similique sunt vel, voluptates.
        Architecto at beatae cupiditate harum illum itaque odit quae reiciendis
        repellendus veritatis. Fuga fugiat laborum nam quia veritatis.
        Accusamus, dolorem dolorum ducimus error laudantium libero omnis quae
        quas saepe velit. Ad aliquam autem blanditiis error ipsa, laudantium non
        numquam quae sequi similique, soluta voluptatem. Aspernatur dignissimos
        illo impedit ipsa, officiis quasi repellat voluptates. Consectetur cum
        illum quas! Excepturi illo modi mollitia quisquam? In ipsa omnis
        quibusdam. Accusamus at aut consectetur dignissimos ea eveniet itaque
        iure, modi molestiae praesentium reiciendis sapiente voluptate? A beatae
        laudantium magni necessitatibus optio perferendis quam quod, sapiente
        vero? Alias, amet aspernatur cum distinctio ducimus harum itaque libero
        molestias pariatur quasi quod, temporibus ut, veritatis. Amet assumenda
        consequuntur, cupiditate, dicta esse est illum maxime natus perspiciatis
        porro reiciendis rem repellendus sapiente similique, sint. Adipisci
        aliquam animi architecto aspernatur atque, cum cumque dignissimos enim
        et exercitationem facere fuga hic maiores mollitia necessitatibus, nemo
        neque pariatur reiciendis rem sequi sint sunt vel vero voluptate
        voluptatum! Adipisci delectus, illo itaque odit perferendis suscipit
        voluptates voluptatum. Amet aperiam commodi cum cupiditate eaque esse et
        facilis fuga, impedit, in ipsa ipsum iusto nam neque nisi ratione rerum
        sed sint totam voluptas. Accusamus eligendi fugit nam perferendis
        sapiente totam ullam! A dolorem error fuga mollitia quia reiciendis
        sequi? Consectetur eos explicabo fugiat, inventore magni nulla
        perferendis perspiciatis tempora tempore voluptatibus. Eaque, ex, illum?
        Aliquid dolore dolorum facere harum magni nostrum quasi sit veritatis. A
        at dignissimos, odio odit quae tempora! Ab alias aut consequuntur culpa
        dolorem, doloremque doloribus dolorum est eveniet fuga fugit hic illo
        illum inventore itaque laboriosam magni minima mollitia pariatur placeat
        possimus quia quidem quod, rem repellendus sed suscipit tempora! Aliquam
        architecto aut autem consectetur, consequatur cum cupiditate deserunt
        doloremque dolores ducimus eligendi esse et fuga fugiat impedit in
        labore laboriosam laborum, magnam molestias nesciunt nobis nostrum
        obcaecati odit optio perspiciatis quasi qui quidem rem repellat saepe
        sit, soluta suscipit tenetur totam vitae voluptatibus! Atque dignissimos
        eaque explicabo harum laudantium libero, modi non numquam obcaecati,
        odio optio provident, quaerat sed tempore voluptatum. Corporis dolores
        maxime placeat qui ut? A ab ad laborum porro provident quaerat,
        quisquam! Accusantium aut commodi fugiat id laudantium modi, praesentium
        quas tempore unde velit! Animi dicta dignissimos dolore, dolores fuga
        ipsa ipsum maiores numquam officia quae quisquam, tempore, totam ullam
        ut voluptatum? Alias, atque culpa ducimus ea id libero magni maiores
        minima, quae repellat saepe sapiente, tenetur ullam? Id, quia,
        quibusdam? Ab commodi hic iste iure porro. A assumenda, consequatur,
        dolores ex exercitationem hic itaque minima necessitatibus nobis
        officiis optio praesentium quae quidem quo sapiente ullam voluptates.
        Accusamus at atque beatae blanditiis commodi, est et, ex id ipsum iste
        magnam magni minus molestiae, nisi nostrum obcaecati placeat quia quo
        rem suscipit tenetur unde veniam veritatis. Accusantium ipsa itaque nam
        quam quia repudiandae suscipit voluptates. Accusantium aperiam culpa
        delectus doloremque iusto molestiae odio quaerat quasi saepe veniam? A
        dignissimos dolorum excepturi fugit impedit mollitia nesciunt
        repudiandae tenetur velit voluptas! Ab aperiam assumenda aut blanditiis
        consequatur delectus deleniti distinctio dolor doloremque ea earum
        eligendi enim, et fuga fugiat inventore iste iure laudantium libero
        minima mollitia nobis nostrum nulla officia optio placeat possimus quae
        quia quo quod recusandae, rerum tempora tempore ullam veniam, vero
        voluptatibus. Architecto at, cumque deleniti dicta id itaque laudantium
        magnam minima neque optio possimus, quo repellendus, saepe sapiente
        tempora vitae voluptate. Fugit, temporibus?
      </div>
    </>
  );
};

export default Page;
