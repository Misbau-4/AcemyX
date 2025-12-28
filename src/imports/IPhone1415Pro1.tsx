import svgPaths from "./svg-vbsdnst9mp";
import clsx from "clsx";
import imgQuestionNumber1040X1040Png from "figma:asset/ef1f475576721bddd2cb43425e79de367b1384c8.png";
import imgQuestionNumber1040X1040Png1 from "figma:asset/77db115599b1183ec5ffbd3cc3d2284c1c414c58.png";
import imgImage104 from "figma:asset/109897e9c97c07f132ed32490a484bfc393bb113.png";
import imgGraduatesHat from "figma:asset/784a0e80709c2e31f2f5295ee505cadce64ca308.png";
import imgTablerIconNotebook128X128Png from "figma:asset/e53fa8e9ea560f5d2dd4b0f77146cdc1f18b7e98.png";
import imgFrame1 from "figma:asset/caa01c45aa0f785b9d8b03c5f3067522c0efe545.png";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-mspqj";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <CheckmarkIcons />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#7c7c7c] text-[14px] tracking-[-0.3px]">
        {children}
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fafafa] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[0] not-italic p-[32px] relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
type Svg2Props = {
  additionalClassNames?: string;
};

function Svg2({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Svg2Props>) {
  return (
    <div
      className={clsx("size-[23.99px]", additionalClassNames)}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 23.99 23.99"
      >
        <g id="SVG">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <p className="leading-[20px]">{children}</p>
    </Wrapper2>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({
  text,
  additionalClassNames = "",
}: Text2Props) {
  return (
    <div
      className={clsx(
        "absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[14.54px] justify-center leading-[0] left-0 text-[12px] text-[rgba(255,255,255,0.8)] top-[7.27px] tracking-[-0.056px] translate-y-[-50%]",
        additionalClassNames,
      )}
    >
      <p className="[text-underline-position:from-font] decoration-solid leading-[16px] underline">
        {text}
      </p>
    </div>
  );
}
type ItemLinkTextProps = {
  text: string;
};

function ItemLinkText({ text }: ItemLinkTextProps) {
  return (
    <div className="h-[20px] opacity-80 relative shrink-0 w-full">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[14px] text-white top-[10px] tracking-[-0.056px] translate-y-[-50%] w-[162.31px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type Heading3ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function Heading3ButtonText({
  text,
  additionalClassNames = "",
}: Heading3ButtonTextProps) {
  return (
    <div className="h-[71.99px] relative rounded-[16px] shrink-0 w-[342.02px]">
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] left-[23.99px] text-[#0d114d] text-[16px] top-[35.18px] translate-y-[-50%] w-[245.34px]">
        <p className="leading-[20px]">{text}</p>
      </div>
      <Helper5 additionalClassNames="top-[28.99px]" />
      <div
        className="absolute bg-[#0d114d] h-[1.99px] left-[88.9%] right-[7.01%] top-[34.98px]"
        data-name="Horizontal Divider"
      />
    </div>
  );
}
type Helper5Props = {
  additionalClassNames?: string;
};

function Helper5({ additionalClassNames = "" }: Helper5Props) {
  return (
    <div
      className={clsx(
        "absolute flex h-[13.99px] items-center justify-center left-[90.65%] right-[8.77%]",
        additionalClassNames,
      )}
    >
      <div className="flex-none h-[1.99px] rotate-[270deg] w-[13.99px]">
        <div
          className="bg-[#0d114d] size-full"
          data-name="Horizontal Divider"
        />
      </div>
    </div>
  );
}

function CheckmarkText2() {
  return (
    <Wrapper>{`Socratic AI Tutor & Progress Leaderboard`}</Wrapper>
  );
}

function CheckmarkText1() {
  return (
    <Wrapper>{`Self-Paced Study Notes & Collaborative Peer Forum`}</Wrapper>
  );
}

function CheckmarkText() {
  return (
    <Wrapper>{`Unlimited Practice Questions, Quizzes, & Mock Exams`}</Wrapper>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#222] h-[56px] relative rounded-[999px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.3px]">
            <p className="leading-[24px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Helper4() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 305 1"
        >
          <line
            id="Line 4"
            stroke="var(--stroke-0, #D2D2D2)"
            x2="305"
            y1="0.5"
            y2="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
type CheckmarkTextTextProps = {
  text: string;
};

function CheckmarkTextText({ text }: CheckmarkTextTextProps) {
  return (
    <Wrapper2>
      <p className="leading-[24px]">{text}</p>
    </Wrapper2>
  );
}

function CheckmarkIcons() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="CheckCircle">
          <path
            d={svgPaths.p2bdbbd00}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
};

function Helper3({ text, text1 }: Helper3Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-black text-nowrap w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[32px] tracking-[-1.5px]">
        <p className="leading-[1.2] text-nowrap">{text}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] tracking-[-0.3px]">
        <p className="leading-[1.5] text-nowrap">{text1}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Sparkle />
      <div className="flex flex-col font-['inter:Semi_bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[-0.4px]">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

function Sparkle() {
  return (
    <Wrapper3>
      <g id="Sparkle">
        <path
          d={svgPaths.p2edaed00}
          fill="var(--fill-0, #222222)"
          id="Vector"
        />
      </g>
    </Wrapper3>
  );
}
type Svg1Props = {
  additionalClassNames?: string;
};

function Svg1({ additionalClassNames = "" }: Svg1Props) {
  return (
    <div
      className={clsx(
        "absolute h-[23.995px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]",
        additionalClassNames,
      )}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 23.9952"
      >
        <g id="SVG">
          <path
            d={svgPaths.p3b113600}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TablerIconNotebook128X128PngImage() {
  return (
    <div className="relative shrink-0 size-[63.99px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgTablerIconNotebook128X128Png}
        />
      </div>
    </div>
  );
}
type LinkText1Props = {
  text: string;
};

function LinkText1({ text }: LinkText1Props) {
  return (
    <div className="content-stretch flex items-center justify-center px-[25px] py-[18px] relative rounded-[200px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#0d114d] border-solid inset-0 pointer-events-none rounded-[200px]"
      />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[14px] text-center text-nowrap tracking-[-0.056px]">
        <p className="leading-[21.33px]">{text}</p>
      </div>
    </div>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none rounded-[14.815px]"
    >
      <Image additionalClassNames="rounded-[14.815px]" />
      <Image1 additionalClassNames="rounded-[14.815px]" />
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div
      className={clsx(
        "h-[34.571px] w-[135.56px]",
        additionalClassNames,
      )}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 135.56 34.5705"
      >
        <g id="Frame 427320703">
          <path
            d={svgPaths.p10592900}
            fill="var(--fill-0, #F7F9FC)"
            id="Vector"
          />
          <path
            d={svgPaths.p873d100}
            fill="var(--fill-0, #F7F9FC)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <div className="relative shrink-0 size-[15.539px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15.5393 15.5393"
      >
        <circle
          cx="7.76963"
          cy="7.76963"
          fill="var(--fill-0, #D2ECF3)"
          id="Ellipse 51"
          r="7.76963"
        />
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div
      className={clsx(
        "absolute bg-white content-stretch flex flex-col gap-[7.77px] items-start p-[7.77px] rounded-[7.77px]",
        additionalClassNames,
      )}
    >
      <Helper />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1d202d] text-[7.77px] tracking-[-0.0363px] w-[min-content]">
        <p className="leading-[11.654px]">{text}</p>
      </div>
    </div>
  );
}
type Image1Props = {
  additionalClassNames?: string;
};

function Image1({ additionalClassNames = "" }: Image1Props) {
  return (
    <div
      className={clsx(
        "absolute inset-0 overflow-hidden",
        additionalClassNames,
      )}
    >
      <img
        alt=""
        className="absolute left-0 max-w-none size-full top-0"
        src={imgQuestionNumber1040X1040Png1}
      />
    </div>
  );
}
type ImageProps = {
  additionalClassNames?: string;
};

function Image({ additionalClassNames = "" }: ImageProps) {
  return (
    <div
      className={clsx(
        "absolute inset-0 overflow-hidden",
        additionalClassNames,
      )}
    >
      <img
        alt=""
        className="absolute left-0 max-w-none size-full top-0"
        src={imgQuestionNumber1040X1040Png}
      />
    </div>
  );
}
type LinkTextProps = {
  text: string;
};

function LinkText({ text }: LinkTextProps) {
  return (
    <div className="bg-[#ffdb51] content-stretch flex items-center justify-center px-[24px] py-[18px] relative rounded-[200px] shrink-0">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[14px] text-center text-nowrap tracking-[-0.056px]">
        <p className="leading-[21.33px]">{text}</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-white w-full">
      <p className="leading-[44px] min-w-full relative shrink-0 text-[40px] tracking-[-1.2px] w-[min-content]">
        Dream Big. We’ll help you get there.
      </p>
      <div className="flex flex-col h-[63.07px] justify-center leading-[0] relative shrink-0 text-[16px] tracking-[-0.056px] w-[315.26px]">
        <p className="leading-[22px]">
          Get the top-quality study materials and personal
          guidance you need to ace your exams with confidence.
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[25px] py-[18px] relative rounded-[200px] shrink-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[200px]"
      />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.056px]">
        <p className="leading-[21.33px]">Join the Class</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LinkText text="Explore for Free" />
      <Link />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[22px] top-[116.26px] w-[329.372px]">
      <Frame34 />
      <Frame31 />
    </div>
  );
}

function Group() {
  return (
    <div
      className="relative shrink-0 size-[14px]"
      data-name="Group"
    >
      <div className="absolute inset-[-3.57%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15.0004 15"
        >
          <g id="Group">
            <path
              d={svgPaths.p1a3b6680}
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeOpacity="0.7"
            />
            <path
              d="M9.60103 11.7H5.40098"
              id="Vector_2"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeOpacity="0.7"
            />
            <path
              d={svgPaths.p22791a00}
              id="Vector_3"
              stroke="var(--stroke-0, white)"
              strokeOpacity="0.7"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarLibraryLinear() {
  return (
    <div
      className="relative rounded-[32px] shrink-0"
      data-name="solar:library-linear"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative rounded-[inherit]">
        <Group />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]"
      />
    </div>
  );
}

function Item() {
  return (
    <div
      className="absolute content-stretch flex gap-[8px] items-center left-[22px] top-[calc(50%-14px)] translate-y-[-50%]"
      data-name="Item"
    >
      <SolarLibraryLinear />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[19.09px] justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.056px] w-[169.852px]">
        <p className="leading-[22px]">High-quality prep.</p>
      </div>
    </div>
  );
}

function QuestionNumber1040X1040Png() {
  return (
    <div
      className="absolute h-[207.837px] left-[56.98px] overflow-clip right-[53.91px] rounded-[9.592px] top-[calc(50%-18.57px)] translate-y-[-50%]"
      data-name="QuestionNumber-1040x1040.png"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[9.592px]"
      >
        <Image additionalClassNames="rounded-[9.592px]" />
        <Image1 additionalClassNames="rounded-[9.592px]" />
      </div>
      <div
        className="absolute h-[207.837px] left-[5.18px] top-[calc(50%+1.94px)] translate-y-[-50%] w-[231.794px]"
        data-name="image 104"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[159%] left-[-8.91%] max-w-none top-[-10.62%] w-[118.06%]"
            src={imgImage104}
          />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[69px] items-start justify-between left-[160px] p-[7.77px] rounded-[7.77px] top-[38px] w-[193px]">
      <Helper />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1d202d] text-[7.77px] tracking-[-0.0363px] w-[min-content]">
        <p className="leading-[11.654px]">
          Complete 20 Practice Questions
        </p>
      </div>
    </div>
  );
}

function LeahHeroCard1976X1064Webp() {
  return (
    <div
      className="absolute h-[384.823px] left-[20px] overflow-clip right-[20px] rounded-[15.539px] top-[calc(50%+218.41px)] translate-y-[-50%]"
      data-name="LeahHeroCard-1-976x1064.webp"
    >
      <QuestionNumber1040X1040Png />
      <Text
        text="Complete 20 Practice Questions"
        additionalClassNames="left-[1.29px] top-[209.78px] w-[161.22px]"
      />
      <Text
        text="Complete 20 Practice Questions"
        additionalClassNames="left-[88.06px] top-[287.48px] w-[192.946px]"
      />
      <Frame26 />
      <div
        className="absolute flex h-[160.67px] items-center justify-center left-[237.62px] top-[155.39px] w-[102.324px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[170.18deg] scale-y-[-100%]">
          <div
            className="h-[149.565px] relative w-[77.958px]"
            data-name="graduate\'s hat"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
              src={imgGraduatesHat}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[136px]"
      data-name="Frame"
    >
      <Helper1 additionalClassNames="absolute left-[0.44px] top-[0.71px]" />
    </div>
  );
}

function Link1() {
  return (
    <div
      className="bg-[#ffdb51] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[200px] shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[12px] text-center text-nowrap tracking-[-0.056px]">
        <p className="leading-[17.15px]">Get Started</p>
      </div>
    </div>
  );
}

function ButtonOpenMenu() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-[23.99px]"
      data-name="Button - Open menu"
    >
      <div
        className="absolute bg-white h-[1.99px] left-0 right-0 top-[calc(50%-5.98px)] translate-y-[-50%]"
        data-name="Horizontal Divider"
      />
      <div
        className="absolute bg-white h-[1.99px] left-0 right-0 top-[calc(50%+0.01px)] translate-y-[-50%]"
        data-name="Horizontal Divider"
      />
      <div
        className="absolute bg-white h-[1.99px] left-0 right-0 top-[calc(50%+5.98px)] translate-y-[-50%]"
        data-name="Horizontal Divider"
      />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[19px] items-start relative shrink-0">
      <Link1 />
      <ButtonOpenMenu />
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute content-stretch flex h-[80px] items-center justify-between left-[calc(50%+1px)] px-0 py-[17px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[351px]"
      data-name="Container"
    >
      <Frame />
      <div
        className="h-[0.01px] shrink-0 w-[63px]"
        data-name="Nav - Primary Navigation"
      />
      <Frame33 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[#fd4d26] h-[80px] left-0 top-0 w-[393px]"
      data-name="Header"
    >
      <Container />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-[#fd4d26] h-[852px] left-0 overflow-none top-0 w-[393px]">
      <Header />
      <Frame35 />
      <Item />
      <LeahHeroCard1976X1064Webp />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[16px] items-start leading-[0] relative shrink-0 text-[#0d114d] w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[32px] tracking-[-0.96px] w-full">
        <p className="leading-[40px]">{`Navigating University Exams Shouldn't Be a Barrier.`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="leading-[22px]">
          We know that preparing for university can feel like an
          uphill battle, especially when you’re doing it on your
          own. AcemyX was built to change that. We bring
          top-quality JAMB, WAEC, and Post-UTME prep directly to
          you, so you can focus on what matters: your future.
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="leading-[22px]">
          You’ve got the talent; we’ve got the tools. Let’s get
          you into your dream school together.
        </p>
      </div>
    </div>
  );
}

function QuestionNumber1040X1040Png1() {
  return (
    <div
      className="aspect-[373.937/321] relative rounded-[14.815px] shrink-0 w-full"
      data-name="QuestionNumber-1040x1040.png"
    >
      <Helper2 />
    </div>
  );
}

function Section() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[40px] items-start left-[24px] right-[25px] top-[916px]"
      data-name="Section"
    >
      <Frame36 />
      <QuestionNumber1040X1040Png1 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[14px] items-start relative shrink-0 text-[#0d114d] w-full">
      <p className="leading-[40px] relative shrink-0 text-[32px] tracking-[-0.96px] w-full">
        Prepare, Practice, and Succeed.
      </p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="leading-[22px]">
          AcemyX simplifies your prep with a personal plan built
          around your goals. We provide thousands of expert
          questions and full mock exams to help you track your
          progress with ease.
        </p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <LinkText text="Try AcemyX for Free" />
      <LinkText1 text="Explore Pricing" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[342px]">
      <Frame37 />
      <Frame27 />
    </div>
  );
}

function Header1() {
  return (
    <div
      className="absolute h-[302px] left-[25px] right-[25px] top-[1643px]"
      data-name="Header"
    >
      <Frame38 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[14px] items-start leading-[0] relative shrink-0 text-[#0d114d] w-full">
      <div className="leading-[40px] relative shrink-0 text-[32px] tracking-[-0.96px] w-full">
        <p className="mb-0">{`Meet Your Personal `}</p>
        <p>24/7 Tutor.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="leading-[22px]">{`Stuck on a tough question? Our Socratic AI doesn't just give you the answer, it helps you understand the why.`}</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <LinkText text="Get Guided Help" />
      <LinkText1 text="See an Example" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[342px]">
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Header2() {
  return (
    <div
      className="absolute h-[258px] left-[24px] right-[24px] top-[6838px]"
      data-name="Header"
    >
      <Frame56 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start leading-[0] relative shrink-0 text-[#0d114d] w-full">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[24.55px] justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[24px]">Study at your own pace</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.064px] w-full">
        <p className="leading-[22px]">
          Share your goals with us, and AcemyX will build a
          custom plan that adapts as you learn.
        </p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full">
      <TablerIconNotebook128X128PngImage />
      <Frame39 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start leading-[0] relative shrink-0 text-[#0d114d] w-full">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[24px]">Smart Learning Tools</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.064px] w-full">
        <p className="leading-[22px]">
          Our technology identifies your strengths and shows you
          exactly where to focus to gain the most points.
        </p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full">
      <TablerIconNotebook128X128PngImage />
      <Frame57 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start leading-[0] relative shrink-0 text-[#0d114d] w-full">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[24px]">
          Learn with Friends and Mentors
        </p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.064px] w-full">
        <p className="leading-[22px]">{`You aren't in this alone. Connect with peers and experts to solve tough problems together.`}</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full">
      <TablerIconNotebook128X128PngImage />
      <Frame58 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[1993px] w-[341.17px]">
      <Frame40 />
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Svg() {
  return (
    <Svg2 additionalClassNames="relative shrink-0">
      <path
        d={svgPaths.p6386600}
        fill="var(--fill-0, #00B67A)"
        id="Vector"
      />
    </Svg2>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Svg />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[21.82px] justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[18px] tracking-[-0.056px] w-[77.189px]">
        <p className="leading-[18px]">Trustpilot</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#dcdce6] relative shrink-0 size-[23.99px]"
      data-name="Background"
    >
      <div
        className="absolute bg-[#00b67a] inset-0"
        data-name="Background"
      />
      <Svg1 additionalClassNames="left-[calc(50%+0.01px)]" />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#dcdce6] relative shrink-0 size-[23.99px]"
      data-name="Background"
    >
      <div
        className="absolute bg-[#00b67a] inset-0"
        data-name="Background"
      />
      <Svg1 additionalClassNames="left-1/2" />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#dcdce6] relative shrink-0 size-[23.99px]"
      data-name="Background"
    >
      <div
        className="absolute bg-[#00b67a] inset-[0_50.02%_0_0]"
        data-name="Background"
      />
      <Svg1 additionalClassNames="left-[calc(50%+0.01px)]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Background />
      <Background />
      <Background1 />
      <Background />
      <Background2 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[14px] items-start left-0 text-[#0d114d] top-[0.9px] w-[342.12px]">
      <div className="flex flex-col justify-center leading-[40px] relative shrink-0 text-[32px] tracking-[-0.96px] w-full">
        <p className="mb-0">{`Trusted by Leading Educators `}</p>
        <p>and Foundations.</p>
      </div>
      <p className="leading-[22px] relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        From top-rated reviews to partnerships with educational
        leaders, we’re recognized for helping Nigerian students
        secure their future.
      </p>
    </div>
  );
}

function Header3() {
  return (
    <div
      className="h-[220px] relative shrink-0 w-full"
      data-name="Header"
    >
      <Frame48 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[23px] top-[3372px] w-[342.02px]">
      <Frame46 />
      <Header3 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[14px] items-start relative shrink-0 text-[#0d114d] text-center w-[342.12px]">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[32px] tracking-[-0.96px] w-full">
        <p className="leading-[40px]">Plans and Pricing</p>
      </div>
      <p className="leading-[22px] relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        Flexible plans and solutions for business of all sizes
      </p>
    </div>
  );
}

function ToggleBase() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[44px]"
      data-name="_Toggle base"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 44 24"
      >
        <g id="_Toggle base">
          <rect
            fill="var(--fill-0, #404040)"
            height="24"
            rx="12"
            width="44"
          />
          <g filter="url(#filter0_d_1_1249)" id="Button">
            <circle
              cx="32"
              cy="12"
              fill="var(--fill-0, white)"
              r="10"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.5"
            id="filter0_d_1_1249"
            width="21"
            x="21.5"
            y="2"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_1_1249"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1249"
              mode="normal"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Toggle() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Toggle"
    >
      <ToggleBase />
    </div>
  );
}

function Badge() {
  return (
    <div
      className="bg-[#eaeaea] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[2px] relative rounded-[999px] shrink-0"
      data-name="Badge"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[8px] text-center text-nowrap">
        <p className="leading-[16px]">Save 20%</p>
      </div>
    </div>
  );
}

function Switch() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0"
      data-name="Switch"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[12px] text-nowrap tracking-[-0.2px]">
        Monthly
      </p>
      <Toggle />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[12px] text-nowrap tracking-[-0.2px]">
        Yearly
      </p>
      <Badge />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#232323] content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[100px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.5px]">
        <p className="leading-[1.5]">{`Individual `}</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[100px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.5px]">
        <p className="leading-[1.5]">Enterprise</p>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div
      className="bg-[#f5f5f5] content-stretch flex gap-[4px] items-start justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0"
      data-name="Toggle"
    >
      <Button />
      <Button1 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[4920px] translate-x-[-50%] w-[345px]">
      <Frame59 />
      <Switch />
      <Toggle1 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[32px] text-center tracking-[-0.96px] w-full">
        <p className="leading-[40px]">
          Trusted by Students Across Nigeria.
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full"
        src={imgFrame1}
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-black tracking-[-0.3px]">
        <p className="leading-[1.5] text-nowrap">Ngozi Okeke</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7c7c7c] text-[14px] tracking-[-0.2px]">
        <p className="leading-[1.5] text-nowrap">
          JAMB Aspirant
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#fafafa] h-[420px] relative rounded-[24px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
          <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5e5e5e] text-[20px] tracking-[-0.3px] w-[min-content]">
            <p className="leading-[28px]">
              “Acemyx is a game-changer! The interactive lessons
              and mock exams made learning fun and effective.
              Highly recommend for JAMB prep!”
            </p>
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[23px] top-[2696px] w-[346px]">
      <Frame60 />
      <Frame21 />
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute inset-[0_76.05%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[31.451px_31.451px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 31.4513 31.4513"
      >
        <g id="Group">
          <path
            d={svgPaths.p15d6f6c0}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector"
          />
          <path
            d={svgPaths.p8735200}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute contents inset-[0_76.05%_0_0]"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

function PlacementLogos() {
  return (
    <div
      className="h-[31.451px] overflow-clip relative shrink-0 w-[131.309px]"
      data-name="Placement Logos"
    >
      <ClipPathGroup />
      <div
        className="absolute inset-[22.85%_1.22%_7.4%_29.82%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 90.5539 21.9373"
        >
          <path
            d={svgPaths.p2d326a00}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute inset-[0_56.83%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[47.177px_31.451px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47.177 31.4513"
      >
        <g id="Group">
          <path
            d={svgPaths.p281f9880}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute contents inset-[0_56.83%_0_0]"
      data-name="Clip path group"
    >
      <Group2 />
    </div>
  );
}

function PlacementLogos1() {
  return (
    <div
      className="h-[31.451px] overflow-clip relative shrink-0 w-[109.293px]"
      data-name="Placement Logos"
    >
      <ClipPathGroup1 />
      <div
        className="absolute inset-[25.9%_1.81%_21.37%_49.2%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 53.5438 16.5827"
        >
          <path
            d={svgPaths.p3e0c0c00}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos1 />
    </div>
  );
}

function PlacementLogos2() {
  return (
    <div
      className="h-[31.451px] relative shrink-0 w-[99.072px]"
      data-name="Placement Logos"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 99.0717 31.4513"
      >
        <g id="Placement Logos">
          <path
            d={svgPaths.p2ba7ea00}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector"
          />
          <path
            d={svgPaths.p2388a5b0}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p31b5b970}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p2336a400}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p3ed8f280}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p2846cb00}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p5e9fb00}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p3a9d6a00}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p26e77580}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p2ab91500}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p368081c0}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p3f911000}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_12"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos2 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute inset-[0_70.39%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[35.383px_31.451px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 35.3827 31.4513"
      >
        <g id="Group">
          <path
            d={svgPaths.p1d40fd70}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector"
          />
          <path
            d={svgPaths.p8ad3800}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p41b4000}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pf71d900}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p28d87700}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p3b498380}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p309f38f0}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p28577800}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p296a5d00}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_9"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div
      className="absolute contents inset-[0_70.39%_0_0]"
      data-name="Clip path group"
    >
      <Group3 />
    </div>
  );
}

function PlacementLogos3() {
  return (
    <div
      className="h-[31.451px] overflow-clip relative shrink-0 w-[119.515px]"
      data-name="Placement Logos"
    >
      <ClipPathGroup2 />
      <div
        className="absolute inset-[22.5%_1.62%_23.95%_35.28%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 75.4069 16.8422"
        >
          <path
            d={svgPaths.p32fef700}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos3 />
    </div>
  );
}

function PlacementLogos4() {
  return (
    <div
      className="h-[31.451px] relative shrink-0 w-[106.935px]"
      data-name="Placement Logos"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 106.935 31.4513"
      >
        <g id="Placement Logos">
          <path
            d={svgPaths.p31bd5cc0}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector"
          />
          <path
            d={svgPaths.pf38a00}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2f7da300}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p2cde6880}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p166d0580}
            fill="var(--fill-0, #7C7C7C)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[87.451px] items-center left-[calc(100%+155px)] top-[3679px] translate-x-[-50%]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame20() {
  return (
    <Wrapper1>
      <div className="flex flex-col justify-center leading-[1.2] relative shrink-0 text-[32px] text-black text-nowrap tracking-[-1.8px]">
        <p className="mb-0">{`10,000+ `}</p>
        <p>Students.</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[1.5]">
          Actively preparing for their dream university.
        </p>
      </div>
    </Wrapper1>
  );
}

function Frame23() {
  return (
    <Wrapper1>
      <div className="flex flex-col justify-center leading-[1.2] relative shrink-0 text-[32px] text-black tracking-[-1.8px] w-full">
        <p className="mb-0">{`85% Score `}</p>
        <p>Increase.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">
          Average improvement after just 4 weeks of practice.
        </p>
      </div>
    </Wrapper1>
  );
}

function Frame24() {
  return (
    <Wrapper1>
      <div className="flex flex-col justify-center leading-[1.2] relative shrink-0 text-[32px] text-black tracking-[-1.8px] w-full">
        <p className="mb-0">{`50,000+ `}</p>
        <p>Questions.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">
          Solved by students like you this month alone.
        </p>
      </div>
    </Wrapper1>
  );
}

function Frame25() {
  return (
    <Wrapper1>
      <div className="flex flex-col justify-center leading-[1.2] relative shrink-0 text-[32px] text-black tracking-[-1.8px] w-full">
        <p className="mb-0">{`Unlimited `}</p>
        <p>Support.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">
          Expert mentors available whenever you get stuck.
        </p>
      </div>
    </Wrapper1>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[3908px] translate-x-[-50%] w-[345px]">
      <Frame20 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Text1 text="Free" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">
          Experience AcemyX at No Cost
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <CheckmarkTextText text="Limited access to explore the platform." />
      <CheckmarkTextText text="No commitment, risk-free trial." />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Helper3 text="N0" text1="/user per month" />
      <Frame11 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Helper4 />
      <Frame13 />
    </div>
  );
}

function PricingCard() {
  return (
    <div
      className="absolute bg-[#fafafa] content-stretch flex flex-col h-[476px] items-start justify-between left-[24px] px-[20px] py-[24px] rounded-[20px] top-[5199px] w-[345px]"
      data-name="pricing card"
    >
      <Frame28 />
      <ButtonText text="Get started" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Text1 text="Basic" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">
          Access All Course Materials and Features
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <CheckmarkText />
      <CheckmarkText1 />
      <CheckmarkText2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Helper3 text="N500" text1="/user per month" />
      <Frame14 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Helper4 />
      <Frame15 />
    </div>
  );
}

function PricingCard1() {
  return (
    <div
      className="absolute bg-[#fafafa] content-stretch flex flex-col h-[476px] items-start justify-between left-[24px] px-[20px] py-[24px] rounded-[20px] top-[5699px] w-[345px]"
      data-name="pricing card"
    >
      <Frame29 />
      <ButtonText text="Get started" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Text1 text="Standard" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <CheckmarkText />
      <CheckmarkText1 />
      <CheckmarkText2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Helper3 text="N1200" text1="/user per 3 month" />
      <Frame17 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame16 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">
          Enjoy the same full access with a 20% discount when
          paid upfront.
        </p>
      </div>
      <Helper4 />
      <Frame18 />
    </div>
  );
}

function PricingCard2() {
  return (
    <div
      className="absolute bg-[#fafafa] content-stretch flex flex-col gap-[40px] items-start left-[24px] px-[20px] py-[24px] rounded-[20px] top-[6199px] w-[345px]"
      data-name="pricing card"
    >
      <Frame30 />
      <ButtonText text="Get started" />
    </div>
  );
}

function QuestionNumber1040X1040Png2() {
  return (
    <div
      className="absolute aspect-[373.937/321] left-[24px] right-[24px] rounded-[14.815px] top-[7160px]"
      data-name="QuestionNumber-1040x1040.png"
    >
      <Helper2 />
    </div>
  );
}

function Header4() {
  return (
    <div
      className="absolute content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[12px] items-center leading-[0] left-[calc(50%+0.51px)] text-[#0d114d] text-center top-0 translate-x-[-50%] w-[342.02px]"
      data-name="Header"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[32px] tracking-[-0.96px] w-full">
        <p className="leading-[40px]">FAQs</p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="mb-0">{`We’re here to help you every `}</p>
        <p>step of the way.</p>
      </div>
    </div>
  );
}

function Heading3Button() {
  return (
    <div
      className="h-[71.99px] relative rounded-[16px] shrink-0 w-[342.02px]"
      data-name="Heading 3 → Button"
    >
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] left-[23.99px] text-[#0d114d] text-[16px] top-[35.18px] translate-y-[-50%] w-[246.94px]">
        <p className="leading-[20px]">
          How do I sign up for AcemyX
        </p>
      </div>
      <Helper5 additionalClassNames="top-[28.99px]" />
      <div
        className="absolute bg-[#0d114d] h-[1.99px] left-[88.9%] right-[7.01%] top-[34.99px]"
        data-name="Horizontal Divider"
      />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#f7f5f1] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full"
      data-name="Background"
    >
      <Heading3Button />
    </div>
  );
}

function Heading3Button1() {
  return (
    <div
      className="h-[71.99px] relative rounded-[16px] shrink-0 w-[342.02px]"
      data-name="Heading 3 → Button"
    >
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] left-[23.99px] text-[#0d114d] text-[16px] top-[35.19px] translate-y-[-50%] w-[232.23px]">
        <p className="leading-[20px]">
          What subjects are available on the platform?
        </p>
      </div>
      <Helper5 additionalClassNames="top-[28.99px]" />
      <div
        className="absolute bg-[#0d114d] h-[1.99px] left-[88.9%] right-[7.01%] top-[34.99px]"
        data-name="Horizontal Divider"
      />
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#f7f5f1] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full"
      data-name="Background"
    >
      <Heading3Button1 />
    </div>
  );
}

function Heading3Button2() {
  return (
    <div
      className="h-[71.99px] relative rounded-[16px] shrink-0 w-[342.02px]"
      data-name="Heading 3 → Button"
    >
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] left-[23.99px] text-[#0d114d] text-[16px] top-[35.18px] translate-y-[-50%] w-[199.27px]">
        <p className="leading-[20px]">
          How do practice tests on Moodle work?
        </p>
      </div>
      <Helper5 additionalClassNames="top-[28.98px]" />
      <div
        className="absolute bg-[#0d114d] h-[1.99px] left-[88.9%] right-[7.01%] top-[34.98px]"
        data-name="Horizontal Divider"
      />
    </div>
  );
}

function Background5() {
  return (
    <div
      className="bg-[#f7f5f1] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full"
      data-name="Background"
    >
      <Heading3Button2 />
    </div>
  );
}

function Background6() {
  return (
    <div
      className="bg-[#f7f5f1] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full"
      data-name="Background"
    >
      <Heading3ButtonText text="What unique services does AcemyX offer?" />
    </div>
  );
}

function Background7() {
  return (
    <div
      className="bg-[#f7f5f1] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full"
      data-name="Background"
    >
      <Heading3ButtonText text="Can organizations use AcemyX for their members?" />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(50%+0.51px)] top-[138px] translate-x-[-50%] w-[342.02px]"
      data-name="Container"
    >
      <Background3 />
      <Background4 />
      <Background5 />
      <Background6 />
      <Background7 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="absolute h-[552px] left-1/2 top-[7584px] translate-x-[-50%] w-[345px]"
      data-name="Section"
    >
      <Header4 />
      <Container1 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[13px] items-start leading-[0] left-0 text-white top-[-0.09px] w-[339.92px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[32px] tracking-[-0.96px] w-full">
        <p className="leading-[40px]">Still Need a Hand?</p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="mb-0">{`Our team of mentors is ready to help you navigate your university admission journey. `}</p>
        <p>
          We are committed to making sure every student in
          Nigeria feels supported and ready.
        </p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="bg-[#dcfa7f] content-stretch flex items-center justify-center px-[24px] py-[18px] relative rounded-[200px] shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[16px] text-center text-nowrap tracking-[-0.056px]">
        <p className="leading-[21.33px]">Chat with a Mentor</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[25px] py-[18px] relative rounded-[200px] shrink-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[200px]"
      />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.056px]">
        <p className="leading-[21.33px]">Email Support</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-[197.96px]">
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute h-[253.95px] left-[23.99px] right-[23.99px] top-[63.99px]"
      data-name="Container"
    >
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Section2() {
  return (
    <div
      className="absolute bg-[#010105] h-[382px] left-1/2 top-[8210px] translate-x-[-50%] w-[393px]"
      data-name="Section"
    >
      <Container2 />
    </div>
  );
}

function Frame19() {
  return (
    <div
      className="absolute content-stretch flex items-end left-[0.99px] overflow-clip top-[0.99px]"
      data-name="Frame"
    >
      <Helper1 additionalClassNames="relative shrink-0" />
    </div>
  );
}

function RiLinkedinFill() {
  return (
    <Wrapper3>
      <g id="ri:linkedin-fill">
        <path
          d={svgPaths.p2c13d80}
          fill="var(--fill-0, #FAFAFA)"
          id="Vector"
        />
      </g>
    </Wrapper3>
  );
}

function Svg3() {
  return (
    <Svg2 additionalClassNames="absolute left-[0.98px] top-[0.4px]">
      <path
        d={svgPaths.p34e97880}
        fill="var(--fill-0, white)"
        id="Vector"
      />
    </Svg2>
  );
}

function ItemLink() {
  return (
    <div
      className="relative shrink-0 size-[25px]"
      data-name="Item → Link"
    >
      <Svg3 />
    </div>
  );
}

function GgFacebook() {
  return (
    <Wrapper3>
      <g id="gg:facebook">
        <path
          d={svgPaths.pdc8def2}
          fill="var(--fill-0, #FAFAFA)"
          id="Vector"
        />
      </g>
    </Wrapper3>
  );
}

function Svg4() {
  return (
    <Svg2 additionalClassNames="absolute left-[0.95px] top-[0.4px]">
      <path
        d={svgPaths.p1c843a70}
        fill="var(--fill-0, white)"
        id="Vector"
      />
    </Svg2>
  );
}

function ItemLink1() {
  return (
    <div
      className="relative shrink-0 size-[25px]"
      data-name="Item → Link"
    >
      <Svg4 />
    </div>
  );
}

function List() {
  return (
    <div
      className="absolute content-stretch flex gap-[23px] items-center left-px right-[179px] top-[78px]"
      data-name="List"
    >
      <RiLinkedinFill />
      <ItemLink />
      <GgFacebook />
      <ItemLink1 />
    </div>
  );
}

function Link4() {
  return (
    <div
      className="absolute h-[19.09px] left-[0.99px] top-[0.57px] w-[44.99px]"
      data-name="Link"
    >
      <div className="absolute flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[9.55px] tracking-[-0.056px] translate-y-[-50%] w-[45.327px]">
        <p className="leading-[24px]">About</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-full"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[83.579px]">
        <p className="leading-[20px]">How it Works</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-[42.5px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[42.83px]">
        <p className="leading-[20px]">Pricing</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-[34.3px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[34.604px]">
        <p className="leading-[20px]">FAQs</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-[51.32px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[51.677px]">
        <p className="leading-[20px]">Reviews</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-[70.61px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[70.919px]">
        <p className="leading-[20px]">Contact Us</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[15px] items-start left-[0.99px] px-0 py-px right-[0.76px] top-[34.74px]"
      data-name="List"
    >
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
    </div>
  );
}

function Item1() {
  return (
    <div
      className="absolute h-[184px] left-0 right-[262px] top-[2px]"
      data-name="Item"
    >
      <Link4 />
      <List1 />
    </div>
  );
}

function Link5() {
  return (
    <div
      className="h-[19.09px] relative shrink-0 w-[85.24px]"
      data-name="Link"
    >
      <div className="absolute flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[9.55px] tracking-[-0.056px] translate-y-[-50%] w-[85.572px]">
        <p className="leading-[24px]">Community</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-[64.84px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[65.24px]">
        <p className="leading-[20px]">Resources</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-start px-0 py-px relative shrink-0 w-full"
      data-name="List"
    >
      <ItemLinkText text="Community Invite Link" />
      <ItemLinkText text="Study Community" />
      <ItemLink7 />
    </div>
  );
}

function Item2() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[15px] items-start left-[180px] px-0 py-[2px] right-[0.99px] top-[0.75px]"
      data-name="Item"
    >
      <Link5 />
      <List2 />
    </div>
  );
}

function Link6() {
  return (
    <div
      className="h-[19.09px] relative shrink-0 w-[61.69px]"
      data-name="Link"
    >
      <div className="absolute flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[9.55px] tracking-[-0.056px] translate-y-[-50%] w-[62.08px]">
        <p className="leading-[24px]">Account</p>
      </div>
    </div>
  );
}

function ItemLink8() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-[98.76px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[99.113px]">
        <p className="leading-[20px]">Create Account</p>
      </div>
    </div>
  );
}

function ItemLink9() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-full"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[160.214px]">
        <p className="leading-[20px]">
          Login to Existing Account
        </p>
      </div>
    </div>
  );
}

function ItemLink10() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-[134.11px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[134.414px]">
        <p className="leading-[20px]">Get Account Support</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-start px-0 py-px relative shrink-0 w-full"
      data-name="List"
    >
      <ItemLink8 />
      <ItemLink9 />
      <ItemLink10 />
    </div>
  );
}

function Item3() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 right-[180px] top-[235px]"
      data-name="Item"
    >
      <Link6 />
      <List3 />
    </div>
  );
}

function Link7() {
  return (
    <div
      className="h-[19.09px] relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="absolute flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[9.55px] tracking-[-0.056px] translate-y-[-50%] w-[149.206px]">
        <p className="leading-[24px]">Exams</p>
      </div>
    </div>
  );
}

function ItemLink11() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-full"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[109.209px]">
        <p className="leading-[20px]">JAMB Prep</p>
      </div>
    </div>
  );
}

function ItemLink12() {
  return (
    <div
      className="h-[17.27px] opacity-80 relative shrink-0 w-[86.8px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[87.134px]">
        <p className="leading-[20px]">WAEC Tutor</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-start px-0 py-px relative shrink-0 w-full"
      data-name="List"
    >
      <ItemLink11 />
      <ItemLink12 />
    </div>
  );
}

function Item4() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[15px] items-start left-[180px] right-[18px] top-[235px]"
      data-name="Item"
    >
      <Link7 />
      <List4 />
    </div>
  );
}

function List5() {
  return (
    <div
      className="absolute h-[353px] left-0 right-0 top-[160px]"
      data-name="List"
    >
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute h-[513px] left-[23px] right-[23px] top-[63px]"
      data-name="Container"
    >
      <Frame19 />
      <List />
      <List5 />
    </div>
  );
}

function Background8() {
  return (
    <div
      className="absolute bg-[#030410] h-[651px] left-1/2 top-[8592px] translate-x-[-50%] w-[393px]"
      data-name="Background"
    >
      <Container3 />
    </div>
  );
}

function Link8() {
  return (
    <div
      className="h-[14.55px] relative shrink-0 w-[72.64px]"
      data-name="Link"
    >
      <Text2
        text="Privacy Policy"
        additionalClassNames="w-[72.952px]"
      />
    </div>
  );
}

function Link9() {
  return (
    <div
      className="h-[14.55px] relative shrink-0 w-[69.57px]"
      data-name="Link"
    >
      <Text2
        text="Terms of Use"
        additionalClassNames="w-[69.877px]"
      />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Link8 />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[14.54px] justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[-0.056px] w-[9.246px]">
        <p className="leading-[16px]">{` | `}</p>
      </div>
      <Link9 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[calc(50%-48.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-nowrap tracking-[-0.056px]">
        <p className="leading-[16px]">{`Copyright © 2025 AcemyX. All rights reserved. `}</p>
      </div>
      <Frame53 />
    </div>
  );
}

function Background9() {
  return (
    <div
      className="absolute bg-[#010105] h-[105px] left-0 right-0 top-[9243px]"
      data-name="Background"
    >
      <Container4 />
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="iPhone 14 & 15 Pro - 1"
    >
      <Frame32 />
      <Section />
      <Header1 />
      <Header2 />
      <Frame43 />
      <Frame47 />
      <Frame50 />
      <Frame49 />
      <Frame9 />
      <Frame22 />
      <PricingCard />
      <PricingCard1 />
      <PricingCard2 />
      <QuestionNumber1040X1040Png2 />
      <Section1 />
      <Section2 />
      <Background8 />
      <Background9 />
    </div>
  );
}