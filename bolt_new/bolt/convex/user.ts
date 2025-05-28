import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        picture: v.string(),
        uid: v.string()
    },
    
    handler:async(ctx, args) => {
        // If user already exists, return success

        const user = await ctx.db.query("users").filter(q => q.eq(q.field("email"), args.email)).collect();
        console.log(user);

        // If user doesnot  exists
        
        if(user?.length === 0) {
            // Create a new user
            const newUser = await ctx.db.insert("users", {
                name: args.name,
                email: args.email,
                picture: args.picture,
                uid: args.uid
            });
            return newUser;
        }

    }
})