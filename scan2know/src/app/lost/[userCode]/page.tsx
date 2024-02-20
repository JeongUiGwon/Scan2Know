import LostViewerContainer from '@/containers/lost/LostViewerContainer';

export default function LostUserCodePage({
  params,
}: {
  params: { userCode: string };
}) {
  const userCode = params.userCode;
  return <LostViewerContainer userCode={userCode} />;
}
