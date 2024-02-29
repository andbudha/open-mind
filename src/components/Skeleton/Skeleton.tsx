import ContentLoader from 'react-content-loader';

const skeleton = {
  skeleton_card: `relative w-80 h-[430px] bg-[#fff] border-zinc-600 shadow-lg rounded-md my-6 hover:shadow-zinc-400 text-slate-500`,
};
export const Skeleton = () => (
  <div className={skeleton.skeleton_card}>
    <ContentLoader
      speed={5}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f0f0f0"
      foregroundColor="#ffffff"
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="10" y="14" rx="3" ry="3" width="297" height="178" />
      <rect x="14" y="222" rx="3" ry="3" width="56" height="24" />
      <rect x="13" y="254" rx="3" ry="3" width="117" height="18" />
      <rect x="13" y="283" rx="3" ry="3" width="289" height="19" />
      <rect x="14" y="390" rx="3" ry="3" width="113" height="29" />
      <rect x="102" y="319" rx="0" ry="0" width="3" height="1" />
      <rect x="13" y="307" rx="3" ry="3" width="289" height="19" />
      <rect x="13" y="332" rx="3" ry="3" width="289" height="19" />
      <rect x="233" y="390" rx="3" ry="3" width="71" height="29" />
    </ContentLoader>
  </div>
);
