(function EFB2Mod() {
    const $$scoped_efb_globals = {};
// Built in EFBN targetting 1_8
// https://github.com/eaglerforge/EaglerForgeBuilderNew


(function MetadataDatablock() {
    ModAPI.meta.title("My Awesome Mod");
    ModAPI.meta.version("v1.0");
    ModAPI.meta.description("Does literally nothing");
    ModAPI.meta.credits("By <author>");
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "block/obsidian@0";
            var $$recipeLegend = {
                "A": {
                type: "item",
                id: "coal",
                
            },"B": {
                type: "block",
                id: "cobblestone",
                meta: 0
            }
            };
            var $$recipePattern = [
                "AAA","ABA","AA ",
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
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),1,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 1));
            
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
})();
})();
