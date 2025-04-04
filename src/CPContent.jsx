export default function CPContent(props) {
   return (
      <article className="content">
         <title> {props.topics}</title>
         <p>{props.bodies}</p>
      </article>
   );
}
