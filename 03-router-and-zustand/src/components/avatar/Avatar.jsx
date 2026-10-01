export function Avatar({
   service = "github",
   userName = "LucasLara99",
   size = 40
}) {

   const createUrl = (serv, user) => `https://unavatar.io/${serv}/${user}`;
   const url = createUrl(service, userName);

   return(
      <img
         src={url}
         alt={`Avatar de ${userName}`}
         className="avatar"
         style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "99px"
         }}
      />
   )
}