import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // if (error) {
  // 	console.error(error);
  // 	return new NextResponse("Error message not set", {
  // 		status: 500,
  // 	});
  // }

  return NextResponse.json(
    {},
    {
      status: 200,
    },
  );
};
