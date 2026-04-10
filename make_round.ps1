Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\malav\OneDrive\Attachments\projects\Portfolio\public\profile.jpeg")
$bmp = New-Object System.Drawing.Bitmap $img.Width, $img.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::Transparent)
$brush = New-Object System.Drawing.TextureBrush $img
$g.FillEllipse($brush, 0, 0, $img.Width, $img.Height)
$bmp.Save("C:\Users\malav\OneDrive\Attachments\projects\Portfolio\public\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$img.Dispose()
$bmp.Dispose()
