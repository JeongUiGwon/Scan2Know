import LostViewerContainer from '@/containers/lost/LostViewerContainer';

export default function LostUserCodePage({
  params,
}: {
  params: { userCode: string };
}) {
  return (<LostViewerContainer userCode={params.userCode} />);
}
