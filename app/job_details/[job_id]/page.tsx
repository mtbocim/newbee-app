//pause developtment -> moving to table refactor with MUI
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}