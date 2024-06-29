[WARNING]
WARNING: DO NOT EDIT THIS FILE DIRECTLY!
Use only E-Studio to edit this file.
Editing of this file from any other means is not supported
and may corrupt the experiment design specification.
Technical support will not be able to address any issue in
regards to this file format.

[Experiment]
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=15
_VersionPersist=6
Root="procSession"
Author="Xun Liu"
Abstract=""
Notes=""
Creation=1106716093

[Device0]
_VersionPersist=1
OpenDevice=1
Width=1024
Height=768
Bpp=16
Name="Display"
Class="Display"

[Device1]
_VersionPersist=1
OpenDevice=0
Channels=2
Samples=22050
Bps=16
Name="Sound"
Class="Sound"

[Device2]
_VersionPersist=1
OpenDevice=1
CollectionMode=1
EmulateDeviceName=""
CapsLock=0
NumLock=1
Name="Keyboard"
Class="Keyboard"

[Device3]
_VersionPersist=1
OpenDevice=1
CollectionMode=1
EmulateDeviceName=""
OpenMode=0
ShowCursor=0
Name="Mouse"
Class="Mouse"

[Device4]
_VersionPersist=1
OpenDevice=0
CollectionMode=1
EmulateDeviceName=""
Port=1
BaudRate=19200
Cps=800
Configuration=0
Name="SRBOX"
Class="SRBOX"

[Device5]
_VersionPersist=1
OpenDevice=0
Port=2
BaudRate=19200
DataBits=8
Parity=0
StopBits=0
Name="Serial"
Class="Serial"

[DataFile]
WarnBeforeOverwrite=1
WarnIfConvertFailed=1
RemoveERecoveryFile=0
ReceiveFeedbackDuringDataFileConversion=1
LogLevel(2).Name="Block"
LogLevel(3).Name="Trial"
LogLevel(4).Name="SubTrial"
LogLevel(5).Name="LogLevel5"
LogLevel(6).Name="LogLevel6"
LogLevel(7).Name="LogLevel7"
LogLevel(8).Name="LogLevel8"
LogLevel(9).Name="LogLevel9"
LogLevel(10).Name="LogLevel10"

[StartupInfo]
DisplaySummary=1
UseDefaults=0

[StartupInfo1]
Name="Subject"
Prompt="Please enter the Subject Number (1-32767, 0=No Data Logging):"
DataType=0
Enabled=1
PromptEnabled=1
Default="1"
Min=0
Max=32767
PrivateFlags=268435477
PrivateInfo=1

[StartupInfo2]
Name="Session"
Prompt="Please enter the Session Number (0-32767):"
DataType=0
Enabled=1
PromptEnabled=1
Default="1"
Min=0
Max=32767
PrivateFlags=268435477
PrivateInfo=1

[StartupInfo3]
Name="Group"
Prompt="Please enter Subject's Group (0-32767):"
DataType=0
Enabled=0
PromptEnabled=0
Default="1"
Min=0
Max=32767

[StartupInfo4]
Name="Name"
Prompt="Please enter Subject's Name:"
DataType=1
Enabled=0
PromptEnabled=0
Default=""
MaxLength=255

[StartupInfo5]
Name="Age"
Prompt="Please enter Subject's Age (0-150):"
DataType=0
Enabled=0
PromptEnabled=0
Default="0"
Min=0
Max=150

[StartupInfo6]
Name="Sex"
Prompt="Please enter Subject's Sex:"
DataType=2
Enabled=0
PromptEnabled=0
Default="male"
Choice(1).Value="male"
Choice(2).Value="female"

[StartupInfo7]
Name="Handedness"
Prompt="Enter Subject's Handedness:"
DataType=2
Enabled=0
PromptEnabled=0
Default="left"
Choice(1).Value="left"
Choice(2).Value="right"

[StartupInfo8]
Name="ResearcherID"
Prompt="Please enter Researcher's ID:"
DataType=0
Enabled=0
PromptEnabled=0
Default="1"
Min=0
Max=32767

[Object0]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=2
_ItemList="textClearSceen;textInstr;InLine2;listSession;textEnd"
_VersionPersist=1
FlowLines(0).Count=5
FlowLines(0).FlowItem(0).Name="textClearSceen"
FlowLines(0).FlowItem(1).Name="textInstr"
FlowLines(0).FlowItem(2).Name="InLine2"
FlowLines(0).FlowItem(3).Name="listSession"
FlowLines(0).FlowItem(4).Name="textEnd"
LogData=1
Name="procSession"
TypeName="Procedure"
Tag=""
Notes=""

[Object1]
_Version=131072
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_VersionPersist=1
Code="'***scriRunPause***\n'*************************************************************************\nClock.Scale = 1\n"
Name="scriRunPause"
TypeName="InLine"
Tag=""
Notes=""

[Object2]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=4
_ItemList="listPause;procPause;listRun"
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=4
Order=0
OrderBy=0
ResetEveryRun=0
HideLevelsWithZeroWeight=0
CycleDef=0
CycleValueSamples=0
CycleValueCondition=""
ExitDef=0
ExitValueCycles=1
ExitValueSamples=1
ExitValueSeconds=0
ExitValueCondition=""
LoadMethod=0
Filename=""
UserAttributes=0
Attributes("Weight").DefaultValue="1"
Attributes("Weight").Visible=1
Attributes("Weight").Width=75
Attributes("Weight").OrderIndex=0
Attributes("Nested").DefaultValue=""
Attributes("Nested").Visible=1
Attributes("Nested").Width=75
Attributes("Nested").OrderIndex=1
Attributes("Procedure").DefaultValue=""
Attributes("Procedure").Visible=1
Attributes("Procedure").Width=75
Attributes("Procedure").OrderIndex=2
Levels=2
Levels(1).ValueString="1\tlistPause\tprocPause\t"
Levels(2).ValueString="1\t\tlistRun\t"
Name="listSession"
TypeName="List"
Tag=""
Notes=""

[Object3]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=2
_ItemList="scriRunPause;textRunPause;textClearSceen"
_VersionPersist=1
FlowLines(0).Count=3
FlowLines(0).FlowItem(0).Name="scriRunPause"
FlowLines(0).FlowItem(1).Name="textRunPause"
FlowLines(0).FlowItem(2).Name="textClearSceen"
LogData=1
Name="procPause"
TypeName="Procedure"
Tag=""
Notes=""

[Object4]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=0
Logging("OnsetTime").Log=0
Logging("DurationError").Log=0
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=0
Logging("ACC").Log=0
Logging("RT").Log=0
Logging("RESP").Log=0
Logging("CRESP").Log=0
Logging("Tag").Log=0
Input(0)=!Data0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Text="Remember to respond as fast and as accurately as possible.\n\nKeep your head still.\nDo not blink unless you see a \"+\".\n\nPress the Spacebar to begin."
ForeColor="black"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="50%"
Height="50%"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
FontName="Times New Roman"
FontSize="18"
FontBold="Yes"
FontItalic="No"
FontUnderline="No"
FontStrikeout="No"
WordWrap=1
ClearAfter="No"
Duration="-1"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="textRunPause"
TypeName="TextDisplay"
Tag=""
Notes=""

[Data0]
DeviceName="Keyboard"
DeviceClass="Keyboard"
AllowableInput="{SPACE}"
CorrectInput=""
TimeLimit=""
MaxCount="1"
InputAction=1
SyncOwnerDuration=1
Enabled=1
FlushInputBuffer="Yes"
TerminationInput=""
UserTag=""
ResponseMode="All"
ProcessBackspace="Yes"

[Object5]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=2
_ItemList="textOnset;scriOffset1;pictStim1;InLine1;textOffset"
_VersionPersist=1
FlowLines(0).Count=5
FlowLines(0).FlowItem(0).Name="textOnset"
FlowLines(0).FlowItem(1).Name="scriOffset1"
FlowLines(0).FlowItem(2).Name="pictStim1"
FlowLines(0).FlowItem(3).Name="InLine1"
FlowLines(0).FlowItem(4).Name="textOffset"
LogData=1
Name="procTrial1"
TypeName="Procedure"
Tag=""
Notes=""

[Object6]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=-1
Logging("OnsetTime").Log=-1
Logging("DurationError").Log=-1
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=-1
Logging("ACC").Log=-1
Logging("RT").Log=-1
Logging("RESP").Log=-1
Logging("CRESP").Log=-1
Logging("Tag").Log=0
Input(0)=!Data1
_VersionPersist=2
ActiveState="Default"
States.Count=1
States(1).Name="Default"
States("Default").X="center"
States("Default").Y="center"
States("Default").Width="100%"
States("Default").Height="100%"
States("Default").XAlign="center"
States("Default").YAlign="center"
States("Default").BackColor="black"
States("Default").BackStyle="opaque"
States("Default").BorderColor="black"
States("Default").BorderWidth="0"
States("Default").ClearAfter="No"
States("Default").Enabled="Yes"
States("Default").ChildCount=2
States("Default").Objects(1).Type="Text"
States("Default").Objects(1).Text=""
States("Default").Objects(1).Width="300"
States("Default").Objects(1).Height="300"
States("Default").Objects(1).X="center"
States("Default").Objects(1).Y="center"
States("Default").Objects(1).AlignHorizontal="center"
States("Default").Objects(1).AlignVertical="center"
States("Default").Objects(1).FontName="Times New Roman"
States("Default").Objects(1).FontSize="28"
States("Default").Objects(1).FontBold="Yes"
States("Default").Objects(1).FontUnderline="No"
States("Default").Objects(1).FontStrikeout="No"
States("Default").Objects(1).FontItalic="No"
States("Default").Objects(1).ForeColor="white"
States("Default").Objects(1).BackColor="white"
States("Default").Objects(1).BackStyle="opaque"
States("Default").Objects(1).BorderWidth="0"
States("Default").Objects(1).BorderColor="black"
States("Default").Objects(1).XAlign="center"
States("Default").Objects(1).YAlign="center"
States("Default").Objects(1).WordWrap=1
States("Default").Objects(1).Name="StimCross"
States("Default").Objects(2).Type="Image"
States("Default").Objects(2).Filename="[Pic].bmp"
States("Default").Objects(2).Stretch="No"
States("Default").Objects(2).MirrorLeftRight="No"
States("Default").Objects(2).MirrorUpDown="No"
States("Default").Objects(2).Width="290"
States("Default").Objects(2).Height="290"
States("Default").Objects(2).X="center"
States("Default").Objects(2).Y="center"
States("Default").Objects(2).AlignHorizontal="center"
States("Default").Objects(2).AlignVertical="center"
States("Default").Objects(2).ForeColor="black"
States("Default").Objects(2).BackColor="white"
States("Default").Objects(2).BackStyle="opaque"
States("Default").Objects(2).BorderWidth="0"
States("Default").Objects(2).BorderColor="black"
States("Default").Objects(2).XAlign="center"
States("Default").Objects(2).YAlign="center"
States("Default").Objects(2).SourceColorKey="black"
States("Default").Objects(2).UseSourceColorKey="No"
States("Default").Objects(2).Name="StimPic"
Duration="1000"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="pictStim1"
TypeName="Slide"
Tag=""
Notes=""

[Data1]
DeviceName="Keyboard"
DeviceClass="Keyboard"
AllowableInput="al"
CorrectInput="[CorrResp]"
TimeLimit="1500"
MaxCount="1"
InputAction=0
SyncOwnerDuration=0
Enabled=1
FlushInputBuffer="Yes"
TerminationInput=""
UserTag=""
ResponseMode="All"
ProcessBackspace="Yes"

[Object7]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=0
Logging("OnsetTime").Log=0
Logging("DurationError").Log=0
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=0
Logging("ACC").Log=0
Logging("RT").Log=0
Logging("RESP").Log=0
Logging("CRESP").Log=0
Logging("Tag").Log=0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Text=""
ForeColor="black"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="300"
Height="300"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
FontName="Times New Roman"
FontSize="28"
FontBold="Yes"
FontItalic="No"
FontUnderline="No"
FontStrikeout="No"
WordWrap=1
ClearAfter="No"
Duration="[Offset]"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="textOffset"
TypeName="TextDisplay"
Tag=""
Notes=""

[Object8]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=0
Logging("OnsetTime").Log=0
Logging("DurationError").Log=0
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=0
Logging("ACC").Log=0
Logging("RT").Log=0
Logging("RESP").Log=0
Logging("CRESP").Log=0
Logging("Tag").Log=0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Text="Break Time!"
ForeColor="black"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="50%"
Height="50%"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
FontName="Times New Roman"
FontSize="28"
FontBold="Yes"
FontItalic="No"
FontUnderline="No"
FontStrikeout="No"
WordWrap=1
ClearAfter="No"
Duration="3000"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="textEnd"
TypeName="TextDisplay"
Tag=""
Notes=""

[Object9]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=4
Logging("TxtPause").Log=0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=4
Order=0
OrderBy=0
ResetEveryRun=0
HideLevelsWithZeroWeight=0
CycleDef=0
CycleValueSamples=0
CycleValueCondition=""
ExitDef=0
ExitValueCycles=1
ExitValueSamples=1
ExitValueSeconds=0
ExitValueCondition=""
LoadMethod=0
Filename=""
UserAttributes=1
Attributes("Weight").DefaultValue="1"
Attributes("Weight").Visible=1
Attributes("Weight").Width=75
Attributes("Weight").OrderIndex=0
Attributes("Nested").DefaultValue=""
Attributes("Nested").Visible=1
Attributes("Nested").Width=75
Attributes("Nested").OrderIndex=1
Attributes("Procedure").DefaultValue=""
Attributes("Procedure").Visible=1
Attributes("Procedure").Width=75
Attributes("Procedure").OrderIndex=2
Attributes(1).Name="TxtPause"
Attributes(1).DefaultValue="?"
Attributes(1).VarType=8
Attributes(1).VarTypeInternal=8
Attributes(1).Visible=1
Attributes(1).Width=75
Levels=1
Levels(1).ValueString="1\t\t\t1\t"
Name="listPause"
TypeName="List"
Tag=""
Notes=""

[Object10]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=-1
Logging("OnsetTime").Log=-1
Logging("DurationError").Log=-1
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=-1
Logging("ACC").Log=-1
Logging("RT").Log=-1
Logging("RESP").Log=-1
Logging("CRESP").Log=-1
Logging("Tag").Log=0
Input(0)=!Data2
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Text="Several objects will be presented. Your task is to determine if the object was made by humans or not.  If the object was human made, then press the \"MAN MADE\" key.  If the object was not, then press the \"NOT MAN MADE\" key.\n\nPRESS THE SPACEBAR"
ForeColor="black"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="50%"
Height="50%"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
FontName="Times New Roman"
FontSize="18"
FontBold="Yes"
FontItalic="No"
FontUnderline="No"
FontStrikeout="No"
WordWrap=1
ClearAfter="No"
Duration="-1"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="textInstr"
TypeName="TextDisplay"
Tag=""
Notes=""

[Data2]
DeviceName="Keyboard"
DeviceClass="Keyboard"
AllowableInput="{SPACE}"
CorrectInput=""
TimeLimit=""
MaxCount="1"
InputAction=1
SyncOwnerDuration=1
Enabled=1
FlushInputBuffer="Yes"
TerminationInput=""
UserTag=""
ResponseMode="All"
ProcessBackspace="Yes"

[Object11]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=4
Logging("condition").Log=-1
Logging("Pic").Log=-1
Logging("Onset").Log=-1
Logging("CorrResp").Log=-1
_ItemList="procTrial2;procTrial1"
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=4
Order=0
OrderBy=0
ResetEveryRun=0
HideLevelsWithZeroWeight=0
CycleDef=0
CycleValueSamples=0
CycleValueCondition=""
ExitDef=0
ExitValueCycles=1
ExitValueSamples=1
ExitValueSeconds=0
ExitValueCondition=""
LoadMethod=0
Filename=""
UserAttributes=4
Attributes("Weight").DefaultValue="1"
Attributes("Weight").Visible=0
Attributes("Weight").Width=75
Attributes("Weight").OrderIndex=0
Attributes("Nested").DefaultValue=""
Attributes("Nested").Visible=0
Attributes("Nested").Width=55
Attributes("Nested").OrderIndex=1
Attributes("Procedure").DefaultValue="procTrial"
Attributes("Procedure").Visible=1
Attributes("Procedure").Width=75
Attributes("Procedure").OrderIndex=2
Attributes(1).Name="condition"
Attributes(1).DefaultValue=""
Attributes(1).VarType=8
Attributes(1).VarTypeInternal=8
Attributes(1).Visible=1
Attributes(1).Width=75
Attributes(2).Name="Pic"
Attributes(2).DefaultValue=""
Attributes(2).VarType=8
Attributes(2).VarTypeInternal=8
Attributes(2).Visible=1
Attributes(2).Width=75
Attributes(3).Name="Onset"
Attributes(3).DefaultValue=""
Attributes(3).VarType=8
Attributes(3).VarTypeInternal=8
Attributes(3).Visible=1
Attributes(3).Width=75
Attributes(4).Name="CorrResp"
Attributes(4).DefaultValue=""
Attributes(4).VarType=8
Attributes(4).VarTypeInternal=8
Attributes(4).Visible=1
Attributes(4).Width=75
Levels=156
Levels(1).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(2).ValueString="1\t\tprocTrial1\t412\t165\t500\tl\t"
Levels(3).ValueString="1\t\tprocTrial1\t411\t227\t500\ta\t"
Levels(4).ValueString="1\t\tprocTrial1\t311\t301\t300\ta\t"
Levels(5).ValueString="1\t\tprocTrial1\t312\t231\t500\tl\t"
Levels(6).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(7).ValueString="1\t\tprocTrial1\t411\t057\t300\ta\t"
Levels(8).ValueString="1\t\tprocTrial1\t412\t331\t500\tl\t"
Levels(9).ValueString="1\t\tprocTrial1\t421\t227\t500\ta\t"
Levels(10).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(11).ValueString="1\t\tprocTrial1\t322\t231\t100\tl\t"
Levels(12).ValueString="1\t\tprocTrial1\t412\t091\t500\tl\t"
Levels(13).ValueString="1\t\tprocTrial1\t332\t231\t500\tl\t"
Levels(14).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(15).ValueString="1\t\tprocTrial1\t312\t003\t100\tl\t"
Levels(16).ValueString="1\t\tprocTrial1\t431\t227\t100\ta\t"
Levels(17).ValueString="1\t\tprocTrial1\t321\t301\t300\ta\t"
Levels(18).ValueString="1\t\tprocTrial1\t311\t379\t100\ta\t"
Levels(19).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(20).ValueString="1\t\tprocTrial1\t411\t147\t300\ta\t"
Levels(21).ValueString="1\t\tprocTrial1\t422\t331\t500\tl\t"
Levels(22).ValueString="1\t\tprocTrial1\t312\t303\t100\tl\t"
Levels(23).ValueString="1\t\tprocTrial1\t411\t221\t100\t\t"
Levels(24).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(25).ValueString="1\t\tprocTrial1\t411\t193\t300\ta\t"
Levels(26).ValueString="1\t\tprocTrial1\t331\t301\t100\ta\t"
Levels(27).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(28).ValueString="1\t\tprocTrial1\t321\t379\t100\t\t"
Levels(29).ValueString="1\t\tprocTrial1\t311\t041\t300\t\t"
Levels(30).ValueString="1\t\tprocTrial1\t422\t165\t100\tl\t"
Levels(31).ValueString="1\t\tprocTrial1\t312\t383\t300\tl\t"
Levels(32).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(33).ValueString="1\t\tprocTrial1\t412\t279\t300\tl\t"
Levels(34).ValueString="1\t\tprocTrial1\t311\t321\t500\ta\t"
Levels(35).ValueString="1\t\tprocTrial1\t432\t331\t100\tl\t"
Levels(36).ValueString="1\t\tprocTrial1\t331\t379\t500\ta\t"
Levels(37).ValueString="1\t\tprocTrial1\t421\t221\t100\ta\t"
Levels(38).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(39).ValueString="1\t\tprocTrial1\t321\t041\t100\ta\t"
Levels(40).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(41).ValueString="1\t\tprocTrial1\t312\t011\t100\tl\t"
Levels(42).ValueString="1\t\tprocTrial1\t322\t303\t100\tl\t"
Levels(43).ValueString="1\t\tprocTrial1\t412\t107\t500\tl\t"
Levels(44).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(45).ValueString="1\t\tprocTrial1\t332\t303\t500\tl\t"
Levels(46).ValueString="1\t\tprocTrial1\t311\t239\t100\ta\t"
Levels(47).ValueString="1\t\tprocTrial1\t411\t131\t300\ta\t"
Levels(48).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(49).ValueString="1\t\tprocTrial1\t412\t007\t500\tl\t"
Levels(50).ValueString="1\t\tprocTrial1\t432\t165\t300\tl\t"
Levels(51).ValueString="1\t\tprocTrial1\t331\t041\t100\ta\t"
Levels(52).ValueString="1\t\tprocTrial1\t431\t221\t500\ta\t"
Levels(53).ValueString="1\t\tprocTrial1\t421\t147\t100\ta\t"
Levels(54).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(55).ValueString="1\t\tprocTrial1\t422\t007\t500\tl\t"
Levels(56).ValueString="1\t\tprocTrial1\t322\t383\t300\tl\t"
Levels(57).ValueString="1\t\tprocTrial1\t322\t011\t500\tl\t"
Levels(58).ValueString="1\t\tprocTrial1\t432\t007\t500\tl\t"
Levels(59).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(60).ValueString="1\t\tprocTrial1\t412\t359\t100\tl\t"
Levels(61).ValueString="1\t\tprocTrial1\t431\t147\t300\ta\t"
Levels(62).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(63).ValueString="1\t\tprocTrial1\t332\t011\t500\tl\t"
Levels(64).ValueString="1\t\tprocTrial1\t321\t239\t300\ta\t"
Levels(65).ValueString="1\t\tprocTrial1\t422\t091\t100\tl\t"
Levels(66).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(67).ValueString="1\t\tprocTrial1\t312\t209\t500\tl\t"
Levels(68).ValueString="1\t\tprocTrial1\t411\t001\t500\ta\t"
Levels(69).ValueString="1\t\tprocTrial1\t321\t321\t300\ta\t"
Levels(70).ValueString="1\t\tprocTrial1\t331\t321\t500\ta\t"
Levels(71).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(72).ValueString="1\t\tprocTrial1\t422\t107\t500\tl\t"
Levels(73).ValueString="1\t\tprocTrial1\t312\t241\t100\tl\t"
Levels(74).ValueString="1\t\tprocTrial1\t432\t107\t500\tl\t"
Levels(75).ValueString="1\t\tprocTrial1\t331\t239\t100\ta\t"
Levels(76).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(77).ValueString="1\t\tprocTrial1\t432\t091\t300\tl\t"
Levels(78).ValueString="1\t\tprocTrial1\t322\t241\t100\tl\t"
Levels(79).ValueString="1\t\tprocTrial1\t312\t389\t500\tl\t"
Levels(80).ValueString="1\t\tprocTrial1\t322\t209\t500\tl\t"
Levels(81).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(82).ValueString="1\t\tprocTrial1\t412\t261\t500\tl\t"
Levels(83).ValueString="1\t\tprocTrial1\t311\t029\t100\ta\t"
Levels(84).ValueString="1\t\tprocTrial1\t332\t209\t300\tl\t"
Levels(85).ValueString="1\t\tprocTrial1\t322\t389\t300\tl\t"
Levels(86).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(87).ValueString="1\t\tprocTrial1\t411\t187\t300\ta\t"
Levels(88).ValueString="1\t\tprocTrial1\t321\t029\t300\ta\t"
Levels(89).ValueString="1\t\tprocTrial1\t421\t193\t100\ta\t"
Levels(90).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(91).ValueString="1\t\tprocTrial1\t422\t359\t500\tl\t"
Levels(92).ValueString="1\t\tprocTrial1\t332\t389\t100\tl\t"
Levels(93).ValueString="1\t\tprocTrial1\t331\t029\t500\ta\t"
Levels(94).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(95).ValueString="1\t\tprocTrial1\t432\t359\t300\tl\t"
Levels(96).ValueString="1\t\tprocTrial1\t312\t397\t500\tl\t"
Levels(97).ValueString="1\t\tprocTrial1\t421\t001\t500\ta\t"
Levels(98).ValueString="1\t\tprocTrial1\t322\t003\t500\tl\t"
Levels(99).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(100).ValueString="1\t\tprocTrial1\t411\t299\t500\ta\t"
Levels(101).ValueString="1\t\tprocTrial1\t431\t193\t300\ta\t"
Levels(102).ValueString="1\t\tprocTrial1\t312\t333\t300\tl\t"
Levels(103).ValueString="1\t\tprocTrial1\t412\t051\t300\tl\t"
Levels(104).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(105).ValueString="1\t\tprocTrial1\t322\t397\t100\tl\t"
Levels(106).ValueString="1\t\tprocTrial1\t421\t131\t100\ta\t"
Levels(107).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(108).ValueString="1\t\tprocTrial1\t421\t187\t100\ta\t"
Levels(109).ValueString="1\t\tprocTrial1\t332\t003\t100\tl\t"
Levels(110).ValueString="1\t\tprocTrial1\t312\t223\t300\tl\t"
Levels(111).ValueString="1\t\tprocTrial1\t422\t051\t100\tl\t"
Levels(112).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(113).ValueString="1\t\tprocTrial1\t322\t333\t500\tl\t"
Levels(114).ValueString="1\t\tprocTrial1\t311\t037\t100\ta\t"
Levels(115).ValueString="1\t\tprocTrial1\t422\t261\t300\tl\t"
Levels(116).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(117).ValueString="1\t\tprocTrial1\t332\t241\t500\tl\t"
Levels(118).ValueString="1\t\tprocTrial1\t412\t021\t300\tl\t"
Levels(119).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(120).ValueString="1\t\tprocTrial1\t431\t187\t300\ta\t"
Levels(121).ValueString="1\t\tprocTrial1\t332\t383\t100\tl\t"
Levels(122).ValueString="1\t\tprocTrial1\t432\t261\t300\tl\t"
Levels(123).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(124).ValueString="1\t\tprocTrial1\t431\t001\t100\ta\t"
Levels(125).ValueString="1\t\tprocTrial1\t311\t249\t100\ta\t"
Levels(126).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(127).ValueString="1\t\tprocTrial1\t431\t131\t300\ta\t"
Levels(128).ValueString="1\t\tprocTrial1\t422\t021\t100\tl\t"
Levels(129).ValueString="1\t\tprocTrial1\t321\t037\t100\ta\t"
Levels(130).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(131).ValueString="1\t\tprocTrial1\t332\t333\t300\tl\t"
Levels(132).ValueString="1\t\tprocTrial1\t421\t299\t500\ta\t"
Levels(133).ValueString="1\t\tprocTrial1\t321\t249\t300\ta\t"
Levels(134).ValueString="1\t\tprocTrial1\t421\t057\t100\ta\t"
Levels(135).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(136).ValueString="1\t\tprocTrial1\t331\t037\t300\ta\t"
Levels(137).ValueString="1\t\tprocTrial1\t311\t311\t100\ta\t"
Levels(138).ValueString="1\t\tprocTrial1\t431\t057\t300\ta\t"
Levels(139).ValueString="1\t\tprocTrial2\t10\tfix\t100\t\t"
Levels(140).ValueString="1\t\tprocTrial1\t432\t051\t300\tl\t"
Levels(141).ValueString="1\t\tprocTrial1\t332\t397\t300\tl\t"
Levels(142).ValueString="1\t\tprocTrial1\t432\t021\t500\tl\t"
Levels(143).ValueString="1\t\tprocTrial1\t431\t299\t300\ta\t"
Levels(144).ValueString="1\t\tprocTrial1\t321\t311\t300\ta\t"
Levels(145).ValueString="1\t\tprocTrial2\t10\tfix\t500\t\t"
Levels(146).ValueString="1\t\tprocTrial1\t411\t257\t300\ta\t"
Levels(147).ValueString="1\t\tprocTrial1\t331\t249\t100\ta\t"
Levels(148).ValueString="1\t\tprocTrial1\t331\t311\t100\ta\t"
Levels(149).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(150).ValueString="1\t\tprocTrial1\t422\t279\t500\tl\t"
Levels(151).ValueString="1\t\tprocTrial1\t322\t223\t300\tl\t"
Levels(152).ValueString="1\t\tprocTrial1\t421\t257\t500\ta\t"
Levels(153).ValueString="1\t\tprocTrial1\t332\t223\t500\tl\t"
Levels(154).ValueString="1\t\tprocTrial1\t432\t279\t500\tl\t"
Levels(155).ValueString="1\t\tprocTrial2\t10\tfix\t300\t\t"
Levels(156).ValueString="1\t\tprocTrial1\t431\t257\t100\ta\t"
Name="listRun1"
TypeName="List"
Tag=""
Notes=""

[Object12]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=0
Logging("OnsetTime").Log=0
Logging("DurationError").Log=0
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=0
Logging("ACC").Log=0
Logging("RT").Log=0
Logging("RESP").Log=0
Logging("CRESP").Log=0
Logging("Tag").Log=0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Text=""
ForeColor="black"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="300"
Height="300"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
FontName="Times New Roman"
FontSize="28"
FontBold="Yes"
FontItalic="No"
FontUnderline="No"
FontStrikeout="No"
WordWrap=1
ClearAfter="No"
Duration="[Onset]"
JumpLabel=""
TimingMode=0
PreRelease="100"
OnsetSync=1
OffsetSync=0
Name="textOnset"
TypeName="TextDisplay"
Tag=""
Notes=""

[Object13]
_Version=131072
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_VersionPersist=1
Code="C.SetAttrib \"Offset\", 1500 - C.GetAttrib(\"Onset\")\n\nDim pic_type As Integer\nDim i As Integer\npic_type = c.GetAttrib(\"condition\")\ni = 0\n\nIf pic_type = 311 Then \nGoSub OptionB\nend if\nIf pic_type = 312 Then \nGoSub OptionC \nend if\nIf pic_type = 321 Then \nGoSub OptionD\nend if\nIf pic_type = 322 Then \nGoSub OptionE \nend if\nIf pic_type = 331 Then \nGoSub OptionF\nend if\nIf pic_type = 332 Then \nGoSub OptionG \nend if\nIf pic_type = 411 Then \nGoSub OptionH\nend if\nIf pic_type = 412 Then \nGoSub OptionI \nend if\nIf pic_type = 421 Then \nGoSub OptionJ\nend if\nIf pic_type = 422 Then \nGoSub OptionK \nend if\nIf pic_type = 431 Then \nGoSub OptionL\nend if\nIf pic_type = 432 Then \nGoSub OptionM \nend if\n\nOptionB:\t\n\tIf i <> 1 Then\n\tWritePort &H378, 111\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionC:\n\tIf i <> 1 Then \n\tWritePort &H378, 112\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionD:\n\tIf i <> 1 Then \n\tWritePort &H378, 121\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionE:\n\tIf i <> 1 Then \n\tWritePort &H378, 122\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionF:\n\tIf i <> 1 Then \n\tWritePort &H378, 131\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionG:\n\tIf i <> 1 Then \n\tWritePort &H378, 132\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionH:\n\tIf i <> 1 Then \n\tWritePort &H378, 211\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionI:\n\tIf i <> 1 Then \n\tWritePort &H378, 212\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionJ:\n\tIf i <> 1 Then \n\tWritePort &H378, 221\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionK:\n\tIf i <> 1 Then \n\tWritePort &H378, 222\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionL:\n\tIf i <> 1 Then \n\tWritePort &H378, 231\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if\nOptionM:\n\tIf i <> 1 Then \n\tWritePort &H378, 232\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if"
Name="scriOffset1"
TypeName="InLine"
Tag=""
Notes=""

[Object14]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=0
Logging("OnsetTime").Log=0
Logging("DurationError").Log=0
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=0
Logging("ACC").Log=0
Logging("RT").Log=0
Logging("RESP").Log=0
Logging("CRESP").Log=0
Logging("Tag").Log=0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Text=""
ForeColor="white"
BackColor="black"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="100%"
Height="100%"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
FontName="Times New Roman"
FontSize="28"
FontBold="Yes"
FontItalic="No"
FontUnderline="No"
FontStrikeout="No"
WordWrap=1
ClearAfter="No"
Duration="10"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="textClearSceen"
TypeName="TextDisplay"
Tag=""
Notes=""

[Object15]
_Version=131072
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_VersionPersist=1
Code="Dim j As Integer\nj = 0\n\nIf c.GetAttrib (\"pictStim1.RESP\") = c.GetAttrib (\"CorrResp\") Then\n\tGoSub OptionAA\n\tend if\nIf c.GetAttrib (\"pictStim1.RESP\") <> c.GetAttrib (\"CorrResp\") Then\n\tGoSub OptionBB \n\tend if\n\nOptionAA:\n\tIf j <> 1 Then \n\tWritePort &H378, 1\n\tsleep 1\n\tWritePort &H378, 0\n\tj = 1\n\tend if\nOptionBB:\t\n\tIf j <> 1 Then\n\tWritePort &H378, 2\n\tsleep 1\n\tWritePort &H378, 0\n\tj = 1\n\tend if\n"
Name="InLine1"
TypeName="InLine"
Tag=""
Notes=""

[Object16]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=2
_ItemList="listRun1"
_VersionPersist=1
FlowLines(0).Count=1
FlowLines(0).FlowItem(0).Name="listRun1"
LogData=1
Name="listRun"
TypeName="Procedure"
Tag=""
Notes=""

[Object17]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=2
_ItemList="textOnset;scriOffset2;pictStim2;textOffset"
_VersionPersist=1
FlowLines(0).Count=4
FlowLines(0).FlowItem(0).Name="textOnset"
FlowLines(0).FlowItem(1).Name="scriOffset2"
FlowLines(0).FlowItem(2).Name="pictStim2"
FlowLines(0).FlowItem(3).Name="textOffset"
LogData=1
Name="procTrial2"
TypeName="Procedure"
Tag=""
Notes=""

[Object18]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=-1
Logging("OnsetTime").Log=-1
Logging("DurationError").Log=-1
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=-1
Logging("ACC").Log=-1
Logging("RT").Log=-1
Logging("RESP").Log=-1
Logging("CRESP").Log=-1
Logging("Tag").Log=0
_VersionPersist=2
ActiveState="Default"
States.Count=1
States(1).Name="Default"
States("Default").X="center"
States("Default").Y="center"
States("Default").Width="100%"
States("Default").Height="100%"
States("Default").XAlign="center"
States("Default").YAlign="center"
States("Default").BackColor="black"
States("Default").BackStyle="opaque"
States("Default").BorderColor="black"
States("Default").BorderWidth="0"
States("Default").ClearAfter="No"
States("Default").Enabled="Yes"
States("Default").ChildCount=2
States("Default").Objects(1).Type="Text"
States("Default").Objects(1).Text=""
States("Default").Objects(1).Width="300"
States("Default").Objects(1).Height="300"
States("Default").Objects(1).X="center"
States("Default").Objects(1).Y="center"
States("Default").Objects(1).AlignHorizontal="center"
States("Default").Objects(1).AlignVertical="center"
States("Default").Objects(1).FontName="Times New Roman"
States("Default").Objects(1).FontSize="28"
States("Default").Objects(1).FontBold="Yes"
States("Default").Objects(1).FontUnderline="No"
States("Default").Objects(1).FontStrikeout="No"
States("Default").Objects(1).FontItalic="No"
States("Default").Objects(1).ForeColor="white"
States("Default").Objects(1).BackColor="white"
States("Default").Objects(1).BackStyle="opaque"
States("Default").Objects(1).BorderWidth="0"
States("Default").Objects(1).BorderColor="black"
States("Default").Objects(1).XAlign="center"
States("Default").Objects(1).YAlign="center"
States("Default").Objects(1).WordWrap=1
States("Default").Objects(1).Name="StimCross"
States("Default").Objects(2).Type="Image"
States("Default").Objects(2).Filename="[Pic].bmp"
States("Default").Objects(2).Stretch="No"
States("Default").Objects(2).MirrorLeftRight="No"
States("Default").Objects(2).MirrorUpDown="No"
States("Default").Objects(2).Width="290"
States("Default").Objects(2).Height="290"
States("Default").Objects(2).X="center"
States("Default").Objects(2).Y="center"
States("Default").Objects(2).AlignHorizontal="center"
States("Default").Objects(2).AlignVertical="center"
States("Default").Objects(2).ForeColor="black"
States("Default").Objects(2).BackColor="white"
States("Default").Objects(2).BackStyle="opaque"
States("Default").Objects(2).BorderWidth="0"
States("Default").Objects(2).BorderColor="black"
States("Default").Objects(2).XAlign="center"
States("Default").Objects(2).YAlign="center"
States("Default").Objects(2).SourceColorKey="black"
States("Default").Objects(2).UseSourceColorKey="No"
States("Default").Objects(2).Name="StimPic"
Duration="1500"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="pictStim2"
TypeName="Slide"
Tag=""
Notes=""

[Object19]
_Version=131072
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_VersionPersist=1
Code="C.SetAttrib \"Offset\", 1500 - C.GetAttrib(\"Onset\")\n\nDim pic_type As Integer\nDim i As Integer\npic_type = c.GetAttrib(\"condition\")\ni = 0\n\nIf pic_type = 10 Then \nGoSub OptionA\nend if\n\nOptionA:\n\tIf i <> 1 Then \n\tWritePort &H378, 10\n\tsleep 1\n\tWritePort &H378, 0\n\ti = 1\n\tend if"
Name="scriOffset2"
TypeName="InLine"
Tag=""
Notes=""

[Object20]
_Version=131072
_ExtentX=2117
_ExtentY=1058
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_VersionPersist=1
Code="WritePort &H378, 50\nsleep 1\nWritePort &H378, 0"
Name="InLine2"
TypeName="InLine"
Tag=""
Notes=""

[UserScript]
/*'***User script***
'*************************************************************************
'-------------------------------------------------------------------------
' Global Constant and Variable Declaration
'-------------------------------------------------------------------------
Dim slices as Integer				'represents the number of slices
Dim scans as Integer				'represents the number of scans
Dim reset_request As Integer		'request to reset the microcontroller
Dim slice_request As Integer
Dim scan_request As Integer
Dim scan_slice_request As Integer	'request to send scans&slices combined in a 16 bit word
Dim scan_slice As Integer
Dim nRead As Long					'represents the number of bytes read

Dim currScan as Integer				'current scan number
Dim scanGo as Boolean				'start current scan
'*************************************************************************
*/
Dim Offset as Integer
