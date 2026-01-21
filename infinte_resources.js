(function EFB2Mod() {
    const $$scoped_efb_globals = {};
// Built in EFBN targetting 1_8
// https://github.com/eaglerforge/EaglerForgeBuilderNew


(function MetadataDatablock() {
    ModAPI.meta.title("infinte resources");
    ModAPI.meta.version("v1.0");
    ModAPI.meta.description("this does not include diomands");
    ModAPI.meta.credits("By phantom-armlet71");
})();
(function IconDatablock() {
    ModAPI.meta.icon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAWlBMVEX///8lJSUmHiQfFyEuLi4cHB4AAAAQEBUyMjKoqKnc3Nw5PkZnZ2gYFBsmIiW9vb1gYGAuKy42ODzk5ORYWFiwsLD4+PgaEhzu7u6RkZEGAAgTChafn6BGREcMB34kAAAB/UlEQVRoge2Z7ZqCIBBGA5XSzM8+tq29/9tcmdldZoGI0H70NOcXKR1R33DC1YphGMbl41r6aBeRV8pLt5C88LCu31w+Pkm+ryc6kXsQA+ybkRm1nihAtiGgXe9T5Qw5XAG/PNe73l6e++WHFO0efuJCg9phqxmgLQw4FVSPyeu1HhgKQnIB42e5JS/S5bl9Qzf+kbeV5kE5ceUkhDSQJDNPkuPFYflfW6TLe6DRCKIdADp8HVp1iK04UC4NjYn8ZktiSbIZXXGkyKMfrSy3aDtdM2D/Xkehh2Yjp8hItJC00EBCM1xxlFBPkO75j9wevyPHz5CZW4/WUpnJ1pGL+/JgOcPygBy1JHM5ORoBtdIcuVhQ7p4Wy1PlwsiH+3JyQ8VuQp1HXWscb8lD4SDg5kZafN6oTxeR7+DisHyeXOj6oiebBak4ZDYJM9jQZLFyAn1YgLAnGzIA+0EzSU5PiOX35NLIRYQcu+P9J3JdX0CR0fymDxNiessIOXYng3OiTCG9WZ4gv8JUfJknD6831FAxZgT4Jklb5siBE4w5vFLiyGWkPItY+npdeQd3JEF+CtbnyBn+X1xsO04HAfmpj17LhGvzLzPW+Tuo+FVYlvvldmacWMx42wCvQs5q5+Hy5X1N8uh7klHNPP8QFcv9ci/7ReTHysu4iJx5Pb4B/KlSPHZk7MkAAAAASUVORK5CYII=");
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "block/coal_block@0";
            var $$recipeLegend = {
                "A": {
                type: "block",
                id: "netherrack",
                meta: 0
            },"B": {
                type: "item",
                id: "coal",
                
            }
            };
            var $$recipePattern = [
                "AA","BB",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),4,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 4));
            
            (function (__efb2_arg_itemstack) {var __efb2_arg_itemstack;  (__efb2_arg_itemstack).$setStackDisplayName(ModAPI.util.str('mmm... coal'));})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "block/iron_block@0";
            var $$recipeLegend = {
                "A": {
                type: "block",
                id: "netherrack",
                meta: 0
            },"B": {
                type: "item",
                id: "iron_ingot",
                
            }
            };
            var $$recipePattern = [
                "AA","BB",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),2,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 2));
            
            (function (__efb2_arg_itemstack) {var __efb2_arg_itemstack;  (__efb2_arg_itemstack).$setStackDisplayName(ModAPI.util.str('pretty iron'));})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "block/netherrack@0";
            var $$recipeLegend = {
                "A": {
                type: "block",
                id: "netherrack",
                meta: 0
            }
            };
            var $$recipePattern = [
                "AA","AA",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),8,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 8));
            
            (function (__efb2_arg_itemstack) {var __efb2_arg_itemstack;  (__efb2_arg_itemstack).$setStackDisplayName(ModAPI.util.str('how you get me?'));})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "item/gold_nugget";
            var $$recipeLegend = {
                "A": {
                type: "block",
                id: "netherrack",
                meta: 0
            },"B": {
                type: "item",
                id: "gold_nugget",
                
            },"C": {
                type: "item",
                id: "gold_ingot",
                
            }
            };
            var $$recipePattern = [
                "AAA","BCB","AAA",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),64,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 64));
            
            (function (__efb2_arg_itemstack) {var __efb2_arg_itemstack;  (__efb2_arg_itemstack).$setStackDisplayName(ModAPI.util.str('do i smell like cheese to you?'));})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "item/ender_pearl";
            var $$recipeLegend = {
                "A": {
                type: "item",
                id: "ender_pearl",
                
            },"B": {
                type: "item",
                id: "iron_axe",
                
            }
            };
            var $$recipePattern = [
                "A","B",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),16,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 16));
            
            (function (__efb2_arg_itemstack) {var __efb2_arg_itemstack;  (__efb2_arg_itemstack).$setStackDisplayName(ModAPI.util.str('I see you :)'));})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();
})();
