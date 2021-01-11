import React, { CSSProperties, Fragment } from "react";

import Stopover from "assets/images/stopover.jpg";
import { WorkPageType } from "types/prop-types";

const Work: React.FC<WorkPageType> = ({ company, title, tenure }) => {
  const imageBoxStyle = (): CSSProperties => {
    return {
      background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${Stopover}) no-repeat center center`,
      backgroundSize: "cover",
    };
  };

  return (
    <Fragment>
      <div
        className="flex items-end text-white h-84 xl:mx-80"
        style={imageBoxStyle()}
      >
        <div className="p-6 w-full">
          <h1 className="section-title font-bold leading-11">{company}</h1>
          <h4 className="mt-2">{title}</h4>
          <h5 className="mt-2">{tenure}</h5>
        </div>
      </div>
      <div className="px-6 xl:px-86 py-20">
        <p>Some example text..</p>
        <h2>Scroll back up again to "remove" the sticky position.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
          odio. Praesent convallis urna a lacus interdum ut hendrerit risus
          congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
          In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
          vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
          non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
          purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
          lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
          luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
          ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum
          ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit.
        </p>
      </div>
    </Fragment>
  );
};

export default Work;
