export default function Wrapper({ children, ...props }) {
   return (
      <>
         <div className={"max-w-7xl mx-auto w-full " + props.className}>
            {children}
         </div>
      </>
   );
}
