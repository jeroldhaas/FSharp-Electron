namespace System
open System.Reflection

[<assembly: AssemblyTitleAttribute("FSharpElectron")>]
[<assembly: AssemblyProductAttribute("FSharpElectron")>]
[<assembly: AssemblyDescriptionAttribute("Binding for WebSharper to Electron")>]
[<assembly: AssemblyVersionAttribute("1.0")>]
[<assembly: AssemblyFileVersionAttribute("1.0")>]
do ()

module internal AssemblyVersionInformation =
    let [<Literal>] Version = "1.0"
