import svgPaths from "./svg-8nrdjdiye2";
import clsx from "clsx";
import imgQuestionNumber1040X1040Png from "figma:asset/ef1f475576721bddd2cb43425e79de367b1384c8.png";
import imgQuestionNumber1040X1040Png1 from "figma:asset/77db115599b1183ec5ffbd3cc3d2284c1c414c58.png";
import imgImage104 from "figma:asset/109897e9c97c07f132ed32490a484bfc393bb113.png";
import imgGraduatesHat from "figma:asset/784a0e80709c2e31f2f5295ee505cadce64ca308.png";
import imgTablerIconNotebook128X128Png from "figma:asset/e53fa8e9ea560f5d2dd4b0f77146cdc1f18b7e98.png";
import imgTablerIconCrystalBall128X128Webp from "figma:asset/081636671c000b15b3e54db08698348613e1d8c3.png";
import imgTablerIconMessage128X128Webp from "figma:asset/6891ac1cd14e760654fbb6e6e529390744931c6a.png";
import imgFrame1 from "figma:asset/9d9495c262b041d342ae85a0689dfbfd67ef9b56.png";
import imgFrame2 from "figma:asset/6f6cdb8aa1a64f41385ce6876711e00c95b22ce1.png";
import imgFrame3 from "figma:asset/caa01c45aa0f785b9d8b03c5f3067522c0efe545.png";
import imgFrame4 from "figma:asset/6fbd75085c84c90299fa9d8a21a7bcaf3126d410.png";
import imgFrame5 from "figma:asset/05be041b58b5e1fe37be4a6bb5a74f76d7c0f06d.png";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-wpv7v";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#fafafa] grow h-[420px] min-h-px min-w-px relative rounded-[24px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.99 23.99">
        <g id="SVG">{children}</g>
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("size-[23.99px]", additionalClassNames)}>{children}</Wrapper2>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <CheckmarkIcons />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px]">
        <p className="leading-[24px]">{children}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[14.54px] justify-center leading-[0] left-0 text-[12px] text-[rgba(255,255,255,0.8)] top-[7.27px] tracking-[-0.056px] translate-y-[-50%]", additionalClassNames)}>
      <p className="[text-underline-position:from-font] decoration-solid leading-[16px] underline">{text}</p>
    </div>
  );
}

function Helper7() {
  return (
    <div className="absolute flex h-[13.99px] items-center justify-center left-[95%] right-[4.75%] top-[24.98px]">
      <div className="flex-none h-[1.99px] rotate-[270deg] w-[13.99px]">
        <div className="bg-[#0d114d] size-full" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function CheckmarkText2() {
  return <Wrapper>{`Socratic AI Tutor & Progress Leaderboard`}</Wrapper>;
}

function CheckmarkText1() {
  return <Wrapper>{`Self-Paced Study Notes & Collaborative Peer Forum`}</Wrapper>;
}

function CheckmarkText() {
  return <Wrapper>{`Unlimited Practice Questions, Quizzes, & Mock Exams`}</Wrapper>;
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

function Helper6() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
          <line id="Line 4" stroke="var(--stroke-0, #D2D2D2)" x2="331" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type CheckmarkTextTextProps = {
  text: string;
};

function CheckmarkTextText({ text }: CheckmarkTextTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

function CheckmarkIcons() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CheckCircle">
          <path d={svgPaths.p2bdbbd00} fill="var(--fill-0, #404040)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
type Helper5Props = {
  text: string;
  text1: string;
};

function Helper5({ text, text1 }: Helper5Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-black text-nowrap w-full">
      <div className="flex flex-col font-['inter:Medium',sans-serif] justify-center relative shrink-0 text-[40px] tracking-[-1.5px]">
        <p className="leading-[1.2] text-nowrap">{text}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.3px]">
        <p className="leading-[1.5] text-nowrap">{text1}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
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
    <Wrapper4>
      <g id="Sparkle">
        <path d={svgPaths.p2edaed00} fill="var(--fill-0, #222222)" id="Vector" />
      </g>
    </Wrapper4>
  );
}
type Helper4Props = {
  text: string;
  text1: string;
};

function Helper4({ text, text1 }: Helper4Props) {
  return (
    <div className="basis-0 bg-[#fafafa] grow h-[356px] min-h-px min-w-px relative rounded-[20px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between leading-[0] not-italic p-[32px] relative size-full">
          <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center relative shrink-0 text-[40px] text-black tracking-[-1.8px] w-full">
            <p className="leading-[1.2]">{text}</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px] w-full">
            <p className="leading-[1.5]">{text1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Svg1Props = {
  additionalClassNames?: string;
};

function Svg1({ additionalClassNames = "" }: Svg1Props) {
  return (
    <Wrapper2 additionalClassNames={clsx("absolute size-[23.99px] top-1/2 translate-x-[-50%] translate-y-[-50%]", additionalClassNames)}>
      <path d={svgPaths.p6386600} fill="var(--fill-0, white)" id="Vector" />
    </Wrapper2>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
};

function Helper3({ text, text1 }: Helper3Props) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-black tracking-[-0.3px]">
        <p className="leading-[1.5] text-nowrap">{text}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7c7c7c] text-[14px] tracking-[-0.2px]">
        <p className="leading-[1.5] text-nowrap">{text1}</p>
      </div>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-[#0d114d] w-full">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[24.55px] justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.064px] w-full">
        <p className="leading-[22px]">{text1}</p>
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <div className="h-[34.571px] relative shrink-0 w-[135.56px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.56 34.5705">
        <g id="Frame 427320703">
          <path d={svgPaths.p10592900} fill="var(--fill-0, #F7F9FC)" id="Vector" />
          <path d={svgPaths.p873d100} fill="var(--fill-0, #F7F9FC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <Wrapper4>
      <circle cx="12" cy="12" fill="var(--fill-0, #D2ECF3)" id="Ellipse 51" r="12" />
    </Wrapper4>
  );
}

function Image() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14.815px]">
      <div className="absolute inset-0 overflow-hidden rounded-[14.815px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQuestionNumber1040X1040Png} />
      </div>
      <div className="absolute inset-0 overflow-hidden rounded-[14.815px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQuestionNumber1040X1040Png1} />
      </div>
    </div>
  );
}
type LinkText1Props = {
  text: string;
  additionalClassNames?: string;
};

function LinkText1({ text, additionalClassNames = "" }: LinkText1Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[25px] py-[18px] relative rounded-[200px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[200px]" />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.056px]">
        <p className="leading-[21.33px]">{text}</p>
      </div>
    </div>
  );
}
type LinkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkText({ text, additionalClassNames = "" }: LinkTextProps) {
  return (
    <div className={clsx("bg-[#ffdb51] content-stretch flex items-center justify-center px-[24px] py-[18px] relative rounded-[200px] shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[16px] text-center text-nowrap tracking-[-0.056px]">
        <p className="leading-[21.33px]">{text}</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-full">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[56px] not-italic relative shrink-0 text-[52px] w-full">Dream Big. We’ll help you get there.</p>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[41.08px] justify-center leading-[0] relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="leading-[22px]">Get the top-quality study materials and personal guidance you need to ace your exams with confidence.</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <LinkText text="Explore for Free" />
      <LinkText1 text="Join the Class" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 top-[0.82px] w-[529.02px]">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Group">
      <div className="absolute inset-[-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0004 15">
          <g id="Group">
            <path d={svgPaths.p1a3b6680} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.7" />
            <path d="M9.60103 11.7H5.40098" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.7" />
            <path d={svgPaths.p22791a00} id="Vector_3" stroke="var(--stroke-0, white)" strokeOpacity="0.7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarLibraryLinear() {
  return (
    <div className="relative rounded-[32px] shrink-0" data-name="solar:library-linear">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative rounded-[inherit]">
        <Group />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[calc(50%+154px)] translate-y-[-50%]" data-name="Item">
      <SolarLibraryLinear />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[19.09px] justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.056px] w-[169.852px]">
        <p className="leading-[22px]">High-quality prep.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[354px] left-0 top-[calc(50%+18px)] translate-y-[-50%] w-[530px]" data-name="Container">
      <Frame52 />
      <Item />
    </div>
  );
}

function QuestionNumber1040X1040Png() {
  return (
    <div className="absolute h-[321px] left-[88px] overflow-clip right-[83.26px] rounded-[14.815px] top-[calc(50%-28.67px)] translate-y-[-50%]" data-name="QuestionNumber-1040x1040.png">
      <Image />
      <div className="absolute h-[321px] left-[8px] top-[calc(50%+3px)] translate-y-[-50%] w-[358px]" data-name="image 104">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159%] left-[-8.91%] max-w-none top-[-10.62%] w-[118.06%]" src={imgImage104} />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-start left-[2px] p-[12px] rounded-[12px] top-[324px] w-[249px]">
      <Helper />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1d202d] text-[12px] tracking-[-0.056px] w-[min-content]">
        <p className="leading-[18px]">Complete 20 Practice Questions</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-start left-[136px] p-[12px] rounded-[12px] top-[444px] w-[298px]">
      <Helper />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1d202d] text-[12px] tracking-[-0.056px] w-[min-content]">
        <p className="leading-[18px]">Complete 20 Practice Questions</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[102px] items-start justify-between left-[247px] p-[12px] rounded-[12px] top-[72px] w-[298px]">
      <Helper />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1d202d] text-[12px] tracking-[-0.056px] w-[min-content]">
        <p className="leading-[18px]">Complete 20 Practice Questions</p>
      </div>
    </div>
  );
}

function LeahHeroCard1976X1064Webp() {
  return (
    <div className="absolute h-[594.35px] left-[616px] overflow-clip right-[-0.2px] rounded-[24px] top-[calc(50%+0.17px)] translate-y-[-50%]" data-name="LeahHeroCard-1-976x1064.webp">
      <QuestionNumber1040X1040Png />
      <Frame35 />
      <Frame54 />
      <Frame36 />
      <div className="absolute flex h-[248.151px] items-center justify-center left-[367px] top-[240px] w-[158.038px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[170.18deg] scale-y-[-100%]">
          <div className="h-[231px] relative w-[120.404px]" data-name="graduate\'s hat">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgGraduatesHat} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[596px] left-[calc(50%-0.5px)] top-[95px] translate-x-[-50%] w-[1161px]" data-name="Container">
      <Container />
      <LeahHeroCard1976X1064Webp />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#fd4d26] h-[786px] left-0 right-0 top-0" data-name="Section">
      <Container1 />
      <div className="absolute h-[513px] left-0 top-[783px] w-[1400px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-end overflow-clip relative shrink-0" data-name="Frame">
      <Helper1 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[21.99px] left-0 top-[15.99px] w-[48.62px]" data-name="Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[calc(50%-0.54px)] tracking-[-0.056px] translate-y-[-50%] w-[48.969px]">
        <p className="leading-[22px]">Pricing</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[53.98px] relative shrink-0 w-[48.62px]" data-name="Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] px-0 py-px relative shrink-0 text-[16px] text-white tracking-[-0.056px]" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center relative shrink-0 text-nowrap">
        <p className="leading-[22px]">Features</p>
      </div>
      <div className="flex flex-col font-['Cambria_Math:Regular',sans-serif] h-[19.09px] justify-center not-italic relative shrink-0 w-[13.947px]">
        <p className="leading-[22px]">▾</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[16px] relative shrink-0" data-name="Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[21.99px] left-0 top-[15.99px] w-[58.71px]" data-name="Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[calc(50%-0.54px)] tracking-[-0.056px] translate-y-[-50%] w-[59.09px]">
        <p className="leading-[22px]">Reviews</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="h-[53.98px] relative shrink-0 w-[58.71px]" data-name="Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[21.99px] left-0 top-[15.99px] w-[71.85px]" data-name="Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[calc(50%-0.54px)] tracking-[-0.056px] translate-y-[-50%] w-[72.161px]">
        <p className="leading-[22px]">For Tutors</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="h-[53.98px] relative shrink-0 w-[71.85px]" data-name="Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[21.99px] leading-[0] left-0 text-[16px] text-white top-[15.99px] tracking-[-0.056px] w-[95.77px]" data-name="Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[19.09px] justify-center left-0 top-[calc(50%-0.54px)] translate-y-[-50%] w-[74.494px]">
        <p className="leading-[22px]">Resources</p>
      </div>
      <div className="absolute flex flex-col font-['Cambria_Math:Regular',sans-serif] h-[19.09px] justify-center left-[82.17px] not-italic top-[10.46px] translate-y-[-50%] w-[13.947px]">
        <p className="leading-[22px]">▾</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="h-[53.98px] relative shrink-0 w-[95.77px]" data-name="Item">
      <Link4 />
    </div>
  );
}

function NavPrimaryNavigationList() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Nav - Primary Navigation → List">
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <LinkText1 text="Login" additionalClassNames="h-[56px]" />
      <LinkText text="Get Started" additionalClassNames="h-[56px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <Frame />
      <NavPrimaryNavigationList />
      <Frame34 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#fd4d26] content-stretch flex flex-col items-start left-0 px-[120px] py-0 top-0 w-[1400px]" data-name="Header">
      <Container2 />
    </div>
  );
}

function QuestionNumber1040X1040Png1() {
  return (
    <div className="absolute h-[321px] left-0 right-[727.04px] rounded-[14.815px] top-0" data-name="QuestionNumber-1040x1040.png">
      <Image />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start leading-[0] left-[533px] px-[24px] py-0 right-0 text-[#0d114d] top-[27.79px]" data-name="Paragraph">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[92.18px] justify-center not-italic relative shrink-0 text-[40px] w-full">
        <p className="leading-[48px]">{`Navigating University Exams Shouldn't Be a Barrier.`}</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.056px] w-[499.77px]">
        <p className="leading-[22px]">We know that preparing for university can feel like an uphill battle, especially when you’re doing it on your own. AcemyX was built to change that. We bring top-quality JAMB, WAEC, and Post-UTME prep directly to you, so you can focus on what matters: your future.</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[16px] tracking-[-0.056px] w-[min-content]">
        <p className="leading-[22px]">You’ve got the talent; we’ve got the tools. Let’s get you into your dream school together.</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute h-[321px] left-[120px] top-[879px] w-[1100.98px]">
      <QuestionNumber1040X1040Png1 />
      <Paragraph />
    </div>
  );
}

function QuestionNumber1040X1040Png2() {
  return (
    <div className="absolute h-[321px] left-0 right-[683px] rounded-[14.815px] top-0" data-name="QuestionNumber-1040x1040.png">
      <Image />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[25px] py-[18px] relative rounded-[200px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#0d114d] border-solid inset-0 pointer-events-none rounded-[200px]" />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[16px] text-center text-nowrap tracking-[-0.056px]">
        <p className="leading-[21.33px]">See an Example</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LinkText text="Get Guided Help" />
      <Link5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[590px] right-0 top-[28px]" data-name="Paragraph">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[92.18px] justify-center leading-[48px] not-italic relative shrink-0 text-[#0d114d] text-[40px] w-full">
        <p className="mb-0">{`Meet Your Personal `}</p>
        <p>24/7 Tutor.</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[41.08px] justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[16px] tracking-[-0.056px] w-[499.77px]">
        <p className="leading-[22px]">{`Stuck on a tough question? Our Socratic AI doesn't just give you the answer, it helps you understand the why.`}</p>
      </div>
      <Frame55 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute h-[321px] left-[120px] top-[4966px] w-[1160px]">
      <QuestionNumber1040X1040Png2 />
      <Paragraph1 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[24px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#0d114d]">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[40px] tracking-[-1.2px] w-[min-content]">
        <p className="leading-[44px]">Prepare, Practice, and Succeed.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] tracking-[-0.056px] w-[667.26px]">
        <p className="leading-[22px]">AcemyX simplifies your prep with a personal plan built around your goals. We provide thousands of expert questions and full mock exams to help you track your progress with ease.</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[25px] py-[18px] relative rounded-[200px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#0d114d] border-solid inset-0 pointer-events-none rounded-[200px]" />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[19.09px] justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[16px] text-center tracking-[-0.056px] w-[107.225px]">
        <p className="leading-[21.33px]">Explore Pricing</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <LinkText text="Try AcemyX for Free" />
      <Link6 />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex gap-[42px] items-end left-[120px] right-[120px] top-[1440px]" data-name="Header">
      <Frame37 />
      <Frame56 />
    </div>
  );
}

function TablerIconNotebook128X128Png() {
  return (
    <div className="relative shrink-0 size-[63.99px]" data-name="tabler-icon-notebook-128x128.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTablerIconNotebook128X128Png} />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[120px] px-[24px] py-[28px] rounded-[16px] top-[1674px] w-[377.43px]">
      <TablerIconNotebook128X128Png />
      <Helper2 text="Study at your own pace" text1="Share your goals with us, and AcemyX will build a custom plan that adapts as you learn." />
    </div>
  );
}

function TablerIconCrystalBall128X128Webp() {
  return (
    <div className="relative shrink-0 size-[63.99px]" data-name="tabler-icon-crystal-ball-128x128.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTablerIconCrystalBall128X128Webp} />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(33.33%+45.33px)] px-[24px] py-[28px] rounded-[16px] top-[1674px] w-[377.43px]">
      <TablerIconCrystalBall128X128Webp />
      <Helper2 text="Smart Learning Tools" text1="Our technology identifies your strengths and shows you exactly where to focus to gain the most points." />
    </div>
  );
}

function TablerIconMessage128X128Webp() {
  return (
    <div className="relative shrink-0 size-[63.99px]" data-name="tabler-icon-message-128x128.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTablerIconMessage128X128Webp} />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-[#0d114d] w-full">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[24.55px] justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[24px]">Learn with Friends and Mentors</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.064px] w-full">
        <p className="leading-[22px]">{`You aren't in this alone. Connect with peers and experts to solve tough problems together.`}</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(66.67%-29.33px)] px-[24px] py-[28px] rounded-[16px] top-[1674px] w-[377.43px]">
      <TablerIconMessage128X128Webp />
      <Frame57 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame1} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame1 />
      <Helper3 text="Amara Nzekwe" text1="Exemplary Student" />
    </div>
  );
}

function Frame27() {
  return (
    <Wrapper3>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5e5e5e] text-[24px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[32px]">“Acemyx transformed my study habits. The resources are comprehensive, and the support is incredible. I aced my UTME!”</p>
      </div>
      <Frame2 />
    </Wrapper3>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame2} />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame8 />
      <Helper3 text="Bello Audu" text1="Student, UNIBEN" />
    </div>
  );
}

function Frame28() {
  return (
    <Wrapper3>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5e5e5e] text-[24px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[32px]">“I was struggling with exam anxiety until I found Acemyx. The practice tests and personalized feedback helped me build confidence.”</p>
      </div>
      <Frame9 />
    </Wrapper3>
  );
}

function Frame10() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame3} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame10 />
      <Helper3 text="Ngozi Okeke" text1="JAMB Aspirant" />
    </div>
  );
}

function Frame29() {
  return (
    <Wrapper3>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5e5e5e] text-[24px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[32px]">“Acemyx is a game-changer! The interactive lessons and mock exams made learning fun and effective. Highly recommend for JAMB prep!”</p>
      </div>
      <Frame12 />
    </Wrapper3>
  );
}

function Frame13() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame4} />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame13 />
      <Helper3 text="Aisha Bello" text1="Student, UNILORIN" />
    </div>
  );
}

function Frame31() {
  return (
    <Wrapper3>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5e5e5e] text-[24px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[32px]">“Thanks to Acemyx, I felt fully prepared for my WAEC exams. The detailed explanations and study guides were invaluable.”</p>
      </div>
      <Frame14 />
    </Wrapper3>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame5} />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame15 />
      <Helper3 text="Chidi Obi" text1="Student, UNILORIN" />
    </div>
  );
}

function Frame30() {
  return (
    <Wrapper3>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5e5e5e] text-[24px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[32px]">“I love how Acemyx adapts to my learning style. The platform is user-friendly, and the content is always up-to-date. A must-have for students!”</p>
      </div>
      <Frame16 />
    </Wrapper3>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[-96px] top-[2278px] w-[1684px]">
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame31 />
      <Frame30 />
    </div>
  );
}

function Svg() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <path d={svgPaths.p6386600} fill="var(--fill-0, #00B67A)" id="Vector" />
    </Wrapper1>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Svg />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[21.82px] justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[18px] tracking-[-0.056px] w-[77.199px]">
        <p className="leading-[18px]">Trustpilot</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dcdce6] relative shrink-0 size-[35.99px]" data-name="Background">
      <div className="absolute bg-[#00b67a] inset-0" data-name="Background" />
      <Svg1 additionalClassNames="left-[calc(50%-0.01px)]" />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dcdce6] relative shrink-0 size-[35.99px]" data-name="Background">
      <div className="absolute bg-[#00b67a] inset-0" data-name="Background" />
      <Svg1 additionalClassNames="left-1/2" />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#dcdce6] relative shrink-0 size-[35.99px]" data-name="Background">
      <div className="absolute bg-[#00b67a] inset-[0_49.99%_0_0]" data-name="Background" />
      <Svg1 additionalClassNames="left-1/2" />
    </div>
  );
}

function Frame41() {
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

function Frame43() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-end left-[120px] top-[2845.59px]">
      <Frame42 />
      <Frame41 />
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[26px] items-start leading-[0] left-[120px] right-[calc(33.33%+115.93px)] text-[#0d114d] top-[2902.85px]" data-name="Header">
      <div className="flex flex-col justify-center leading-[44px] min-w-full relative shrink-0 text-[40px] tracking-[-1.2px] w-[min-content]">
        <p className="mb-0">{`Trusted by Leading Educators `}</p>
        <p>and Foundations.</p>
      </div>
      <div className="flex flex-col h-[41.08px] justify-center relative shrink-0 text-[16px] tracking-[-0.056px] w-[697.4px]">
        <p className="leading-[22px]">From top-rated reviews to partnerships with educational leaders, we’re recognized for helping Nigerian students secure their future.</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-1/2 top-[3338px] translate-x-[-50%] w-[1160px]">
      <Helper4 text="10,000+ Students." text1="Actively preparing for their dream university." />
      <Helper4 text="85% Score Increase." text1="Average improvement after just 4 weeks of practice." />
      <Helper4 text="50,000+ Questions." text1="Solved by students like you this month alone." />
      <Helper4 text="Unlimited Support." text1="Expert mentors available whenever you get stuck." />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] relative shrink-0 text-[#0d114d] text-center w-full">
      <div className="flex flex-col h-[48.18px] justify-center relative shrink-0 text-[40px] tracking-[-1.2px] w-full">
        <p className="leading-[44px]">Plans and Pricing</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="leading-[22px]">Flexible plans and solutions for business of all sizes</p>
      </div>
    </div>
  );
}

function ToggleBase() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="_Toggle base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="_Toggle base">
          <rect fill="var(--fill-0, #404040)" height="24" rx="12" width="44" />
          <g filter="url(#filter0_d_1_1249)" id="Button">
            <circle cx="32" cy="12" fill="var(--fill-0, white)" r="10" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21.5" id="filter0_d_1_1249" width="21" x="21.5" y="2">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1249" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1249" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Toggle">
      <ToggleBase />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[2px] relative rounded-[999px] shrink-0" data-name="Badge">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">Save 20%</p>
      </div>
    </div>
  );
}

function Switch() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Switch">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] text-nowrap tracking-[-0.2px]">Monthly</p>
      <Toggle />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] text-nowrap tracking-[-0.2px]">Yearly</p>
      <Badge />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#232323] content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.5px]">
        <p className="leading-[1.5]">{`Individual `}</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.5px]">
        <p className="leading-[1.5]">Enterprise</p>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[4px] items-start justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0" data-name="Toggle">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(33.33%+53.33px)] top-[3890px] w-[360px]">
      <Frame44 />
      <Switch />
      <Toggle1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[86px] items-start relative shrink-0 w-full">
      <Text text="Free" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">Experience AcemyX at No Cost</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <CheckmarkTextText text="Limited access to explore the platform." />
      <CheckmarkTextText text="No commitment, risk-free trial." />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Helper5 text="N0" text1="/user per month" />
      <Frame5 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Helper6 />
      <Frame11 />
    </div>
  );
}

function PricingCard() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[562px] items-start justify-between left-[120px] px-[20px] py-[24px] rounded-[20px] top-[4208px] w-[371px]" data-name="pricing card">
      <Frame58 />
      <ButtonText text="Get started" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[86px] items-start relative shrink-0 w-full">
      <Text text="Basic" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">Access All Course Materials and Features</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <CheckmarkText />
      <CheckmarkText1 />
      <CheckmarkText2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Helper5 text="N500" text1="/user per month" />
      <Frame18 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame17 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 1">
            <line id="Line 4" stroke="var(--stroke-0, #D2D2D2)" x2="330" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function PricingCard1() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[562px] items-start justify-between left-[calc(33.33%+48.33px)] px-[20px] py-[24px] rounded-[20px] top-[4208px] w-[370px]" data-name="pricing card">
      <Frame48 />
      <ButtonText text="Get started" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Text text="Standard" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c7c7c] text-[16px] tracking-[-0.3px] w-full">
        <p className="leading-[1.5]">Enjoy the same full access with a 20% discount when paid upfront.</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <CheckmarkText />
      <CheckmarkText1 />
      <CheckmarkText2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Helper5 text="N1200" text1="/user per 3 month" />
      <Frame21 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Helper6 />
      <Frame22 />
    </div>
  );
}

function PricingCard2() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[562px] items-start justify-between left-[calc(66.67%-24.33px)] px-[20px] py-[24px] rounded-[20px] top-[4208px] w-[371px]" data-name="pricing card">
      <Frame49 />
      <ButtonText text="Get started" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_76.05%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[31.451px_31.451px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.4513 31.4513">
        <g id="Group">
          <path d={svgPaths.p15d6f6c0} fill="var(--fill-0, #7C7C7C)" id="Vector" />
          <path d={svgPaths.p8735200} fill="var(--fill-0, #7C7C7C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_76.05%_0_0]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function PlacementLogos() {
  return (
    <div className="h-[31.451px] overflow-clip relative shrink-0 w-[131.309px]" data-name="Placement Logos">
      <ClipPathGroup />
      <div className="absolute inset-[22.85%_1.22%_7.4%_29.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.5539 21.9373">
          <path d={svgPaths.p2d326a00} fill="var(--fill-0, #7C7C7C)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_56.83%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[47.177px_31.451px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.177 31.4513">
        <g id="Group">
          <path d={svgPaths.p281f9880} fill="var(--fill-0, #7C7C7C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0_56.83%_0_0]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function PlacementLogos1() {
  return (
    <div className="h-[31.451px] overflow-clip relative shrink-0 w-[109.293px]" data-name="Placement Logos">
      <ClipPathGroup1 />
      <div className="absolute inset-[25.9%_1.81%_21.37%_49.2%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.5438 16.5827">
          <path d={svgPaths.p3e0c0c00} fill="var(--fill-0, #7C7C7C)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos1 />
    </div>
  );
}

function PlacementLogos2() {
  return (
    <div className="h-[31.451px] relative shrink-0 w-[99.072px]" data-name="Placement Logos">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.0717 31.4513">
        <g id="Placement Logos">
          <path d={svgPaths.p2ba7ea00} fill="var(--fill-0, #7C7C7C)" id="Vector" />
          <path d={svgPaths.p2388a5b0} fill="var(--fill-0, #7C7C7C)" id="Vector_2" />
          <path d={svgPaths.p31b5b970} fill="var(--fill-0, #7C7C7C)" id="Vector_3" />
          <path d={svgPaths.p2336a400} fill="var(--fill-0, #7C7C7C)" id="Vector_4" />
          <path d={svgPaths.p3ed8f280} fill="var(--fill-0, #7C7C7C)" id="Vector_5" />
          <path d={svgPaths.p2846cb00} fill="var(--fill-0, #7C7C7C)" id="Vector_6" />
          <path d={svgPaths.p5e9fb00} fill="var(--fill-0, #7C7C7C)" id="Vector_7" />
          <path d={svgPaths.p3a9d6a00} fill="var(--fill-0, #7C7C7C)" id="Vector_8" />
          <path d={svgPaths.p26e77580} fill="var(--fill-0, #7C7C7C)" id="Vector_9" />
          <path d={svgPaths.p2ab91500} fill="var(--fill-0, #7C7C7C)" id="Vector_10" />
          <path d={svgPaths.p368081c0} fill="var(--fill-0, #7C7C7C)" id="Vector_11" />
          <path d={svgPaths.p3f911000} fill="var(--fill-0, #7C7C7C)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_70.39%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[35.383px_31.451px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3827 31.4513">
        <g id="Group">
          <path d={svgPaths.p1d40fd70} fill="var(--fill-0, #7C7C7C)" id="Vector" />
          <path d={svgPaths.p8ad3800} fill="var(--fill-0, #7C7C7C)" id="Vector_2" />
          <path d={svgPaths.p41b4000} fill="var(--fill-0, #7C7C7C)" id="Vector_3" />
          <path d={svgPaths.pf71d900} fill="var(--fill-0, #7C7C7C)" id="Vector_4" />
          <path d={svgPaths.p28d87700} fill="var(--fill-0, #7C7C7C)" id="Vector_5" />
          <path d={svgPaths.p3b498380} fill="var(--fill-0, #7C7C7C)" id="Vector_6" />
          <path d={svgPaths.p309f38f0} fill="var(--fill-0, #7C7C7C)" id="Vector_7" />
          <path d={svgPaths.p28577800} fill="var(--fill-0, #7C7C7C)" id="Vector_8" />
          <path d={svgPaths.p296a5d00} fill="var(--fill-0, #7C7C7C)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[0_70.39%_0_0]" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function PlacementLogos3() {
  return (
    <div className="h-[31.451px] overflow-clip relative shrink-0 w-[119.515px]" data-name="Placement Logos">
      <ClipPathGroup2 />
      <div className="absolute inset-[22.5%_1.62%_23.95%_35.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.4069 16.8422">
          <path d={svgPaths.p32fef700} fill="var(--fill-0, #7C7C7C)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos3 />
    </div>
  );
}

function PlacementLogos4() {
  return (
    <div className="h-[31.451px] relative shrink-0 w-[106.935px]" data-name="Placement Logos">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.935 31.4513">
        <g id="Placement Logos">
          <path d={svgPaths.p31bd5cc0} fill="var(--fill-0, #7C7C7C)" id="Vector" />
          <path d={svgPaths.pf38a00} fill="var(--fill-0, #7C7C7C)" id="Vector_2" />
          <path d={svgPaths.p2f7da300} fill="var(--fill-0, #7C7C7C)" id="Vector_3" />
          <path d={svgPaths.p2cde6880} fill="var(--fill-0, #7C7C7C)" id="Vector_4" />
          <path d={svgPaths.p166d0580} fill="var(--fill-0, #7C7C7C)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-center justify-center overflow-clip px-[34px] py-[28px] relative rounded-[20px] shrink-0 w-[200px]">
      <PlacementLogos4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[87.451px] items-center left-[calc(45.83%+2.33px)] top-[3154px] translate-x-[-50%]">
      <Frame3 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame6 />
    </div>
  );
}

function Header3() {
  return (
    <div className="absolute font-['Figtree:Regular',sans-serif] font-normal h-[89.97px] leading-[0] left-[calc(50%-0.01px)] text-[#0d114d] text-center top-0 translate-x-[-50%] w-[386.93px]" data-name="Header">
      <div className="absolute flex flex-col h-[48.18px] justify-center left-[calc(50%+0.61px)] text-[40px] top-[21.37px] tracking-[-1.2px] translate-x-[-50%] translate-y-[-50%] w-[95.066px]">
        <p className="leading-[44px]">FAQs</p>
      </div>
      <div className="absolute flex flex-col h-[19.09px] justify-center left-[calc(50%+0.18px)] text-[16px] top-[78.45px] tracking-[-0.056px] translate-x-[-50%] translate-y-[-50%] w-[387.281px]">
        <p className="leading-[22px]">We’re here to help you every step of the way.</p>
      </div>
    </div>
  );
}

function Heading3Button() {
  return (
    <div className="absolute h-[63.98px] left-0 right-0 rounded-[16px] top-0" data-name="Heading 3 → Button">
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[19.09px] justify-center leading-[0] left-[31.99px] text-[#0d114d] text-[16px] top-[31.72px] translate-y-[-50%] w-[486.229px]">
        <p className="leading-[16px]">How do I sign up for AcemyX</p>
      </div>
      <Helper7 />
      <div className="absolute bg-[#0d114d] h-[1.99px] left-[94.25%] right-[4%] top-[30.98px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#f7f5f1] h-[63.98px] left-0 overflow-clip right-0 rounded-[16px] top-0" data-name="Background">
      <Heading3Button />
    </div>
  );
}

function Heading3Button1() {
  return (
    <div className="absolute h-[63.98px] left-0 right-0 rounded-[16px] top-0" data-name="Heading 3 → Button">
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[19.09px] justify-center leading-[0] left-[31.99px] text-[#0d114d] text-[16px] top-[31.72px] translate-y-[-50%] w-[335.19px]">
        <p className="leading-[16px]">What subjects are available on the platform?</p>
      </div>
      <Helper7 />
      <div className="absolute bg-[#0d114d] h-[1.99px] left-[94.25%] right-[4%] top-[30.98px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#f7f5f1] h-[63.98px] left-0 overflow-clip right-0 rounded-[16px] top-[79.97px]" data-name="Background">
      <Heading3Button1 />
    </div>
  );
}

function Heading3Button2() {
  return (
    <div className="absolute h-[63.98px] left-0 right-0 rounded-[16px] top-0" data-name="Heading 3 → Button">
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] left-[31.99px] text-[#0d114d] text-[16px] text-nowrap top-[31.17px] translate-y-[-50%]">
        <p className="leading-[16px]">How do practice tests on Moodle work?</p>
      </div>
      <Helper7 />
      <div className="absolute bg-[#0d114d] h-[1.99px] left-[94.25%] right-[4%] top-[30.98px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#f7f5f1] h-[63.98px] left-0 overflow-clip right-0 rounded-[16px] top-[159.94px]" data-name="Background">
      <Heading3Button2 />
    </div>
  );
}

function Heading3Button3() {
  return (
    <div className="absolute h-[63.98px] left-0 right-0 rounded-[16px] top-0" data-name="Heading 3 → Button">
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] left-[31.99px] text-[#0d114d] text-[16px] text-nowrap top-[31.18px] translate-y-[-50%]">
        <p className="leading-[16px]">What unique services does AcemyX offer?</p>
      </div>
      <Helper7 />
      <div className="absolute bg-[#0d114d] h-[1.99px] left-[94.25%] right-[4%] top-[30.98px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#f7f5f1] h-[63.98px] left-0 overflow-clip right-0 rounded-[16px] top-[239.91px]" data-name="Background">
      <Heading3Button3 />
    </div>
  );
}

function Heading3Button4() {
  return (
    <div className="absolute h-[63.98px] left-0 right-0 rounded-[16px] top-0" data-name="Heading 3 → Button">
      <div className="absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[19.09px] justify-center leading-[0] left-[31.99px] text-[#0d114d] text-[16px] top-[31.73px] translate-y-[-50%] w-[414.731px]">
        <p className="leading-[16px]">Can organizations use AcemyX for their members?</p>
      </div>
      <Helper7 />
      <div className="absolute bg-[#0d114d] h-[1.99px] left-[94.25%] right-[4%] top-[30.98px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-[#f7f5f1] h-[63.98px] left-0 overflow-clip right-0 rounded-[16px] top-[319.88px]" data-name="Background">
      <Heading3Button4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[383.86px] left-1/2 top-[153.97px] translate-x-[-50%] w-[800px]" data-name="Container">
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
    <div className="absolute h-[537.83px] left-1/2 top-[5481px] translate-x-[-50%] w-[1200px]" data-name="Section">
      <Header3 />
      <Container3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex items-end left-0 overflow-clip top-0" data-name="Frame">
      <Helper1 />
    </div>
  );
}

function RiLinkedinFill() {
  return (
    <Wrapper4>
      <g id="ri:linkedin-fill">
        <path d={svgPaths.p2c13d80} fill="var(--fill-0, #FAFAFA)" id="Vector" />
      </g>
    </Wrapper4>
  );
}

function Svg2() {
  return (
    <Wrapper1 additionalClassNames="absolute left-[0.98px] top-[0.4px]">
      <path d={svgPaths.p34e97880} fill="var(--fill-0, white)" id="Vector" />
    </Wrapper1>
  );
}

function ItemLink() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Item → Link">
      <Svg2 />
    </div>
  );
}

function GgFacebook() {
  return (
    <Wrapper4>
      <g id="gg:facebook">
        <path d={svgPaths.pdc8def2} fill="var(--fill-0, #FAFAFA)" id="Vector" />
      </g>
    </Wrapper4>
  );
}

function Svg3() {
  return (
    <Wrapper1 additionalClassNames="absolute left-[0.95px] top-[0.4px]">
      <path d={svgPaths.p1c843a70} fill="var(--fill-0, white)" id="Vector" />
    </Wrapper1>
  );
}

function ItemLink1() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Item → Link">
      <Svg3 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex gap-[23px] items-center left-[calc(50%-495px)] top-[82px] translate-x-[-50%]" data-name="List">
      <RiLinkedinFill />
      <ItemLink />
      <GgFacebook />
      <ItemLink1 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[19.09px] left-0 top-[1.82px] w-[44.99px]" data-name="Link">
      <div className="absolute flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[9.55px] tracking-[-0.056px] translate-y-[-50%] w-[45.327px]">
        <p className="leading-[24px]">About</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="h-[17.27px] opacity-80 relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[83.579px]">
        <p className="leading-[20px]">How it Works</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="h-[17.27px] opacity-80 relative shrink-0 w-[42.5px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[42.83px]">
        <p className="leading-[20px]">Pricing</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="h-[17.27px] opacity-80 relative shrink-0 w-[34.3px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[34.604px]">
        <p className="leading-[20px]">FAQs</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="h-[17.27px] opacity-80 relative shrink-0 w-[51.32px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[51.677px]">
        <p className="leading-[20px]">Reviews</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="h-[17.27px] opacity-80 relative shrink-0 w-[70.61px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[70.919px]">
        <p className="leading-[20px]">Contact Us</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 px-0 py-px right-[49.09px] top-[35.98px]" data-name="List">
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
    </div>
  );
}

function Item6() {
  return (
    <div className="absolute h-[215.92px] left-0 right-[632.66px] top-0" data-name="Item">
      <Link7 />
      <List1 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[19.09px] left-[0.33px] top-[0.82px] w-[85.24px]" data-name="Link">
      <div className="absolute flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[9.55px] tracking-[-0.056px] translate-y-[-50%] w-[85.572px]">
        <p className="leading-[24px]">Community</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="h-[20px] opacity-80 relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[14px] text-white top-[10px] tracking-[-0.056px] translate-y-[-50%] w-[162.32px]">
        <p className="leading-[20px]">Community Invite Link</p>
      </div>
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="h-[17.27px] opacity-80 relative shrink-0 w-[151.63px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[151.948px]">
        <p className="leading-[20px]">Study Community</p>
      </div>
    </div>
  );
}

function ItemLink9() {
  return (
    <div className="h-[17.27px] opacity-80 relative shrink-0 w-[64.84px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[65.24px]">
        <p className="leading-[20px]">Resources</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 px-0 py-px right-0 top-[35px]" data-name="List">
      <ItemLink7 />
      <ItemLink8 />
      <ItemLink9 />
    </div>
  );
}

function Item7() {
  return (
    <div className="absolute h-[203px] left-[205px] right-[397px] top-px" data-name="Item">
      <Link8 />
      <List2 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[19.09px] left-[0.67px] top-[0.82px] w-[61.69px]" data-name="Link">
      <div className="absolute flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[9.55px] tracking-[-0.056px] translate-y-[-50%] w-[62.08px]">
        <p className="leading-[24px]">Account</p>
      </div>
    </div>
  );
}

function ItemLink10() {
  return (
    <div className="absolute h-[17.27px] left-0 opacity-80 top-[0.91px] w-[98.76px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[99.113px]">
        <p className="leading-[20px]">Create Account</p>
      </div>
    </div>
  );
}

function ItemLink11() {
  return (
    <div className="absolute h-[17.27px] left-0 opacity-80 top-[32.9px] w-[159.89px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[160.214px]">
        <p className="leading-[20px]">Login to Existing Account</p>
      </div>
    </div>
  );
}

function ItemLink12() {
  return (
    <div className="absolute h-[17.27px] left-0 opacity-80 top-[64.89px] w-[134.11px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[134.414px]">
        <p className="leading-[20px]">Get Account Support</p>
      </div>
    </div>
  );
}

function ItemLink13() {
  return (
    <div className="absolute h-[37.27px] left-0 opacity-80 top-[96.87px] w-[154.23px]" data-name="Item → Link">
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-0 tracking-[-0.056px] w-[154.43px]">Refer a Friend</p>
    </div>
  );
}

function List3() {
  return (
    <div className="absolute h-[135.97px] left-[0.67px] right-[27.99px] top-[34.98px]" data-name="List">
      <ItemLink10 />
      <ItemLink11 />
      <ItemLink12 />
      <ItemLink13 />
    </div>
  );
}

function Item8() {
  return (
    <div className="absolute h-[171px] left-[410px] right-[194px] top-px" data-name="Item">
      <Link9 />
      <List3 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[19.09px] left-0 top-[0.82px] w-[148.89px]" data-name="Link">
      <div className="absolute flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold h-[19.09px] justify-center leading-[0] left-0 text-[16px] text-white top-[9.55px] tracking-[-0.056px] translate-y-[-50%] w-[149.206px]">
        <p className="leading-[24px]">Exams</p>
      </div>
    </div>
  );
}

function ItemLink14() {
  return (
    <div className="absolute h-[17.27px] left-0 opacity-80 top-[0.91px] w-[108.84px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[109.209px]">
        <p className="leading-[20px]">JAMB Prep</p>
      </div>
    </div>
  );
}

function ItemLink15() {
  return (
    <div className="absolute h-[17.27px] left-0 opacity-80 top-[32.9px] w-[86.8px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[17.27px] justify-center leading-[0] left-0 text-[14px] text-white top-[8.64px] tracking-[-0.056px] translate-y-[-50%] w-[87.134px]">
        <p className="leading-[20px]">WAEC Tutor</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="absolute h-[147.95px] left-0 right-[16.65px] top-[34.98px]" data-name="List">
      <ItemLink14 />
      <ItemLink15 />
    </div>
  );
}

function Item9() {
  return (
    <div className="absolute h-[183px] left-[616px] right-0 top-px" data-name="Item">
      <Link10 />
      <List4 />
    </div>
  );
}

function List5() {
  return (
    <div className="absolute h-[216px] left-[393px] right-0 top-0" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[216px] left-[120px] right-[122px] top-[96px]" data-name="Container">
      <Frame26 />
      <List />
      <List5 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#030410] h-[408px] left-0 right-0 top-0" data-name="Background">
      <Container4 />
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[14.55px] relative shrink-0 w-[72.64px]" data-name="Link">
      <Text1 text="Privacy Policy" additionalClassNames="w-[72.952px]" />
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[14.55px] relative shrink-0 w-[69.57px]" data-name="Link">
      <Text1 text="Terms of Use" additionalClassNames="w-[69.877px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex items-center left-[113.77px] top-1/2 translate-y-[-50%]" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-nowrap tracking-[-0.056px]">
        <p className="leading-[16px]">{`Copyright © 2025 AcemyX. All rights reserved. `}</p>
      </div>
      <Link11 />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[14.54px] justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[-0.056px] w-[9.246px]">
        <p className="leading-[16px]">{` | `}</p>
      </div>
      <Link12 />
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#010105] h-[97px] left-0 right-0 top-[408px]" data-name="Background">
      <Container5 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[505px] left-0 right-0 top-[6533px]" data-name="Footer">
      <Background8 />
      <Background9 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 right-0 top-[6533px]">
      <Footer />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[16px] items-center relative shrink-0 text-center text-white w-full">
      <p className="leading-[44px] relative shrink-0 text-[40px] tracking-[-1.2px] w-full">Still Need a Hand?</p>
      <div className="leading-[22px] relative shrink-0 text-[16px] tracking-[-0.056px] w-full">
        <p className="mb-0">{`Our team of mentors is ready to help you navigate your university admission journey. `}</p>
        <p>We are committed to making sure every student in Nigeria feels supported and ready.</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LinkText text="Chat with a Mentor" />
      <LinkText1 text="Email Support" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-center left-[calc(50%+14.5px)] top-[79px] translate-x-[-50%] w-[671px]" data-name="Container">
      <Frame53 />
      <Frame59 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#010105] h-[388px] left-1/2 top-[6145px] translate-x-[-50%] w-[1400px]" data-name="Section">
      <Container6 />
    </div>
  );
}

export default function Frame60() {
  return (
    <div className="bg-white relative size-full">
      <Section />
      <Header />
      <Frame45 />
      <Frame47 />
      <Header1 />
      <div className="absolute flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] left-[calc(16.67%+466.67px)] not-italic text-[#0d114d] text-[40px] text-center top-[2152px] translate-x-[-50%] translate-y-[-50%] w-[720px]">
        <p className="leading-[44px]">Trusted by Students Across Nigeria.</p>
      </div>
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame32 />
      <Frame43 />
      <Header2 />
      <Frame33 />
      <Frame46 />
      <PricingCard />
      <PricingCard1 />
      <PricingCard2 />
      <Frame7 />
      <Section1 />
      <Group4 />
      <Section2 />
    </div>
  );
}