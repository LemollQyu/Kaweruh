import db from '@/lib/db'
import Jawab from "../comp/jawab"

const CommunityHtml = async () => {

	const komentar = await db.QuestionsHtml.findMany();
	console.log(komentar)
	
	

	return (
		<>
			<div className="border-blue-600 border-l pl-5 absolute left-3 lg:left-24 top-28">
				<h1 className="text-blue-600">Komunitas HTML</h1>
			</div>
			
			<div className="w-full px-3 lg:px-24 ">
				<div  className="w-full border-dashed flex justify-between items-center  border-x-[1.9px] h-16">
					<h1 className="font-bold font-Alliance text-xl">Pertanyaan :</h1>
					
					<Jawab />
				</div>
				
				
			</div>
			
			<div className="w-full px-3 lg:px-24 flex flex-col gap-5 py-3 border-dashed border-y-[1.9px]">
				{
					komentar.map(comment => {
						console.log(comment)
						
						return (
							<>
							
								<div key={comment.id} className="flex flex-col gap-2 w-full border-dashed border-y-[1.9px]  border-x-[1.9px]">
									 
										<p className="text-bold text-sm">{comment.nama}</p>
										<p className="text-light text-sm">{comment.waktu}</p>
										
										<div className="mt-3">
										<p className="text-end text-lg font-[Write]">{comment.pesan}</p>
										</div>
										
										
								</div>	
							</>
						)
					})
				}
			</div>
		
		</>
	
	)
}

export default CommunityHtml